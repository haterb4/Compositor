import clientPromise from "../../../../lib/mongodb";

export default async (req: Request, res: Response) => {
   try {
       const client = await clientPromise;
       const db = client.db("composix");

       const movies = await db
           .collection("movies")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();

       //res.json(movies);
   } catch (e) {
       console.error(e);
   }
};