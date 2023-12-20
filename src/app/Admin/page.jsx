import Image from 'next/image'
import React from 'react'
import Home from "@/../public/icon/home.jpg"
import Admi from "@/../public/icon/config.png"
import Cuidador from "@/../public/icon/cuidadores.png"
import Usu from "@/../public/icon/usuario.png"
import Preguntas from "@/../public/icon/preguntas.png"
import Link from 'next/link'
import UsuG from "@/../public/icon/OBJECTS.png"


function page() {
    return (
        <>
        <nav className='bg-[#124C5F] w-80 h-screen flex-col items-center justify-center gap-10'>
            <div>
                <Image src={UsuG} width={200} height={200}></Image>
                <button className='bg-[#FFB749]'> Editar Perfil </button>
            </div>
            <section className='bg-[#F8F8F8] h-96 rounded-tr-[100px]'>
                <ul className=''>
                    <li className='flex'> <Image src={Home}  width={5} height={5} ></Image> Home </li>
                    <li className='flex'> <Image src={Admi}  width={5} height={5} ></Image>Administradores</li>
                    <li className='flex'> <Image src={Cuidador}  width={5} height={5}></Image>Cuidadores</li>
                    <li className='flex'> <Image src={Usu}  width={5} height={5}></Image>Usuarios</li>
                    <li className='flex'> <Image src={Preguntas}  width={5} height={5}></Image> Preguntas Frecuentes</li>
                </ul>
                <button className='bg-[#124C5F]'> <Link href={""}>Cerrar Sesion</Link></button>
            </section>
        </nav>
        <section>
            <header></header>
        </section>
        </>
    )
}

export default page