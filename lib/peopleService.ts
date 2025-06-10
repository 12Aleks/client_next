export const fetchPeople = async () => {
    const res = await fetch("http://localhost:5000/people");
    if (!res.ok) throw new Error("Failed to fetch people");
    return res.json();
};

export const addPerson = async (person: {
    firstName: string;
    lastName: string;
    age: number;
}) => {
    const res = await fetch("http://localhost:5000/people", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(person),
    });
    if (!res.ok) throw new Error("Failed to add person");
    return res.json();
};

export const deletePerson = async (id: number) => {
    const res = await fetch(`http://localhost:5000/people/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete person");
};