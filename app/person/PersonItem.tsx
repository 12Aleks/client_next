import {memo} from "react";
import { Person } from "@/app/person/index";

type PersonItemProps = {
    person: Person;
    handleDelete: (id: number) => void;
};

const PersonItem: React.FC<PersonItemProps> = ({ person, handleDelete }) => {
    return (
        <li className="my-3 flex items-center justify-between">
            {person.firstName} {person.lastName} ({person.age}){" "}
            <button
                className="ms-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                onClick={() => handleDelete(person.id)}
            >
                Delete
            </button>
        </li>
    );
};

export default memo(PersonItem);