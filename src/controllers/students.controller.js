export const getStudents =  (req, res) => {
    return res.status(200).send({ message: "Get all students controller" });
    }

export const getStudentById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Get student ${id} controller` });
    }

export const createStudent = (req, res) => {
    const { name, email, age } = req.body;

    age >= 18 ? res.status(200).send({ message: `Create student ${name} with an e-mail as ${email} and ${age} yers old controller` }) : res.status(201).send({ message: `Student ${name} with an e-mail as ${email} and young then 18 years old controller` });

    if (!name || !email || !age) {
        return res.status(400).send({ message: "Missing fields controller" });
    }
    return res.status(200).send({ message: `Create student ${name} with an e-mail as ${email} and ${age} yers old controller` });
    }

export const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).send({ message: "Missing fields" });
    }
    return res.status(200).send({ message: `Update student ${id} with name ${name}, email ${email} and ${age} years old` });
    }
    
export const deleteStudent = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Delete student ${id}` });

}
