import Layout from "../../components/layout";
import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input/Input";
import H1 from "../../components/Text/Title/H1";
import Select from "../../components/Form/Input/Select";
import Head from "next/head";
import BtnPrimary from "../../components/Buttons/BtnPrimary";
import {inspect} from "util";
import styles from "../../styles/Layout.module.css";

export default function Add() {
    return (
        <>
            <Head>
                <title>Ajouter un contact - ISEN Méditerranée</title>
            </Head>
            <Layout>
            <H1 Text={'Ajouter contact'}/>
            <Form Method={'POST'} Action={'/api/form'}>
                <input type={'hidden'} name={'formName'} value={'Contact'}/>
                <Input Label={'Nom'} Placeholder={'Votre nom'} Name={'surname'} Type={'text'} Required={true}/>
                <Input Label={'Prénom'} Placeholder={'Votre prénom'} Name={'name'} Type={'text'} Required={true}/>
                <Input Label={'Email'} Placeholder={'Votre mail'} Name={'mail'} Type={'mail'} Required={true}/>
                <Input Label={'Code postal'} Placeholder={'Votre code postal'} Name={'postal_code'} Type={'phone'} Required={true}/>
                <Input Label={'Téléphone'} Placeholder={'Votre téléphone'} Name={'phone'} Type={'phone'}/>
                <Select Label={'Niveau d\'étude'} Name={'level'} Title={'Niveau d\'étude'}>
                    <option value={'Terminale'}>Terminale</option>
                    <option value={'Première'}>Première</option>
                    <option value={'Seconde'}>Seconde</option>
                    <option value={'BAC PRO'}>BAC PRO</option>
                    <option value={'BAC'}>BAC</option>
                    <option value={'BAC+1'}>BAC+1</option>
                    <option value={'BAC+2'}>BAC+2</option>
                </Select>
                <br />
                <b className={styles.txt_center}>Vous êtes intéressé par les formations: </b>
                <Input Label={'Cycle BIOlogie, Sciences et Technologies'} Name={'f_biost'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Cycle Informatique et Numérique'} Name={'f_cin'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Cycle MPSI/PSI'} Name={'f_csi'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Prépa Rebond'} Name={'f_rebond'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Cycle Ingénieur'} Name={'f_inge'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Cycle Ingénieur par apprentissage'} Name={'f_itii'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Cycle Ingénieur rentrée en 4ème année'} Name={'f_m1'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Mastère Cybersécurité'} Name={'f_cyber'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Mastère MTN'} Name={'f_mtn'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Bachelor Cybersécurité'} Name={'f_b_cyber'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Bachelor Gaming e-makers'} Name={'f_b_gaming'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Bachelor Tech For Green'} Name={'f_b_green'} Type={'checkbox'} Placeholder={null}/>
                <Input Label={'Je ne sais pas encore quelle formation je souhaite'} Name={'f_unknown'} Type={'checkbox'}
                       Placeholder={null}/>
                <br />
                <BtnPrimary Text={'Envoyer'} Type={'submit'}/>
            </Form>
            <br /><br /><br /><br />
            <i>En soumettant ce formulaire, vous acceptez de recevoir de la communication de la part de ISEN Yncréa Méditerranée concernant ses formations et actualités
                par mail et/ou téléphone. Vous pourrez vous désinscrire à tout moment.</i>
        </Layout>
        </>
    );
}
