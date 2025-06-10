"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {personSchema} from "@/lib/zodSchema";
import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { fetchPeople, addPerson, deletePerson } from "@/lib/peopleService";
import PersonItem from "@/app/person/PersonItem";

type PersonForm = z.infer<typeof personSchema>;
export type Person = {
    id: number;
    firstName: string;
    lastName: string;
    age: number };

export default function Person() {
    const queryClient = useQueryClient();

    const { data: people = [], isLoading } = useQuery({
        queryKey: ["people"],
        queryFn: fetchPeople,
    });

    const { mutateAsync: createPerson } = useMutation({
        mutationFn: addPerson,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["people"] }),
    });

    const { mutateAsync: removePerson } = useMutation({
        mutationFn: deletePerson,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["people"] }),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<PersonForm>({ resolver: zodResolver(personSchema) });

    const onSubmit = async (data: PersonForm) => {
        await createPerson(data);
        reset();
    };

    const handleDelete = async (id: number) => {
        await removePerson(id);
    };

    return (
        <main  className="flex flex-col items-center justify-center p-12">
            <h1 className="text-lg mb-5">People</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row items-center gap-3 justify-center">
                <div className="flex flex-col">
                    <input {...register("firstName")} placeholder="First name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                </div>
                <div className="flex flex-col">
                <input {...register("lastName")} placeholder="Last name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                </div>
                    <div className="flex flex-col">
                <input type="number" {...register("age")} placeholder="Person Age" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.age && <p className="text-red-500">{errors.age.message}</p>}
                    </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
            </form>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul className="m-5">
                    {people?.map((p: Person) => (
                        <PersonItem key={p.id} person={p} handleDelete={handleDelete} />
                    ))}
                </ul>
            )}
        </main>
    );
}