import {NextApiRequest, NextApiResponse} from "next";
import { PrismaClient, Prisma } from "@prisma/client";

let SALON = "Journée Portes Ouvertes 19 novembre Toulon"
const bdd = new PrismaClient();

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const body = req.body

    if (body.formName == "Contact" && req.method == "POST") {
        let formationsArray: Array<String> = [];

        if(body.f_biost) {
            formationsArray.push("Cycle BIOlogie, Sciences et Technologies")
        } if (body.f_cin) {
            formationsArray.push('Cycle Informatique et Numérique')
        } if (body.f_csi) {
            formationsArray.push('Cycle MPSI/PSI')
        } if (body.f_rebond) {
            formationsArray.push('Prépa Rebond')
        } if (body.f_inge) {
            formationsArray.push('Cycle Ingénieur')
        } if (body.f_itii) {
            formationsArray.push('Cycle Ingénieur par apprentissage')
        } if (body.f_m1) {
            formationsArray.push('Cycle Ingénieur rentrée en 4ème année')
        } if (body.f_cyber) {
            formationsArray.push('Mastère Cybersécurité')
        } if (body.f_mtn) {
            formationsArray.push('Mastère MTN')
        } if (body.f_b_cyber) {
            formationsArray.push('Bachelor Cybersécurité')
        } if (body.f_b_gaming) {
            formationsArray.push('Bachelor Gaming e-makers')
        } if (body.f_b_green) {
            formationsArray.push('Bachelor Tech For Green')
        } if (body.f_unknown) {
            formationsArray.push('Je ne sais pas encore quelle formation je souhaite')
        }

        let salonCreate: Prisma.SalonCreateInput = {
            nom: body.surname,
            prenom: body.name,
            email: body.mail,
            formations: formationsArray.join(";"),
            code_postal: body.postal_code,
            origine: SALON,
            origine_type: 'JPO',
            telephone: parseInt(body.phone, 10)
        }
        let salonInsert = await bdd.salon.create({
            data: salonCreate
        });
        res.status(200).redirect('/');
    } else {
        res.status(404);
    }
}
