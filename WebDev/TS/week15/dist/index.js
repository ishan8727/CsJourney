import z from 'zod';
import express from 'express';
const app = express();
const zSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Cannnot be empty" }),
    age: z.number().max(120).min(18, { message: "you must be 18+ to join" }).optional
});
app.put('user', (req, res) => {
    const { success } = zSchema.safeParse(req.body);
    const updateBody = req.body;
    if (success) {
        // udate the DB
        console.log(updateBody);
        res.status(200).json({ message: "update success!" });
        return;
    }
    else {
        res.status(401).json({ message: "some error :(" });
        return;
    }
});
//# sourceMappingURL=index.js.map