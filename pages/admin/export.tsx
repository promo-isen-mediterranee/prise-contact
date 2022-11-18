import Layout from "../../components/layout";
import BtnPrimary from "../../components/Buttons/BtnPrimary";
import { PrismaClient } from "@prisma/client";

const bdd = new PrismaClient();

async function exportToCSV() {
    const CSV = [];
    const datas = await bdd.salon.findMany();

    datas.forEach(v => {

    })
    console.log("Export to CSV");

}

export default function Export() {
    return (
        <Layout>
            <h1>Export</h1>
            <BtnPrimary Text="Export" Type="button" OnClick={exportToCSV()}/>
        </Layout>
    )
}
