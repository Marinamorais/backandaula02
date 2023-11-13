export const getCouser =  (req, res) => {
    return res.status(200).send({ message: "Get all Couser controller" });
    }

export const getCouserById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Get Couser ${id} controller` });
    }

export const createCouser = (req, res) => {
    const { name, descricao, students } = req.body;

    if (!name || !descricao || !students) {
        return res.status(400).send({ message: "Missing fields controller" });
    }
    return res.status(200).send({ message: `Create Couser ${name} with an description ${descricao} and ${students} controller` });
    }

export const updateCouser = (req, res) => {
    const { id } = req.params;
    const { name, descricao, students } = req.body;

    if (!name || !descricao || !students) {
        return res.status(400).send({ message: "Missing fields" });
    }
    return res.status(200).send({ message: `Update couser ${id} with name ${name}, description ${descricao} and ${students} ` });
    }
    
export const deleteCouser = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Delete couser ${id}` });
    }