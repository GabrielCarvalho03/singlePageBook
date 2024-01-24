import WomanHero from "../../assets/svg/womanHero"






export const Home = () =>{

    return(
      <>
      <section className="w-full h-10 flex justify-center items-center">
        <h1 className="tracking-1 text-xl"><span className="font-bold">LUCIO</span> BATTAGLIA</h1>
      </section>
      <main className="w-full sm:h-400 bg-primary flex  justify-center ">
        <section className="w-11/12 flex flex-col-reverse pb-10 justify-between items-center  sm:flex-row sm:items-start sm:pb-0">
       <article className="w-72 h-400 bg-berge  mt-10 rounded-xl " >
        <div className="flex flex-col  items-center ">
       <h1 className=" w-11/12 ml-10 tracking-sm text-xl text-blueText mt-5">09 passos para um <span className="font-bold">salão de sucesso</span> </h1>
       <h1 className="text-sm opacity-50  ml-5 mt-5">Preencha o formulário abaixo e faça o download do e-book</h1>

        </div>

       <div className="ml-5 mt-10">
       <h1 className="text-start">Nome*</h1>
       <input type="text" className="w-11/12 outline-none h-8 px-2" />
       <h1 className="text-start mt-2">Email*</h1>
       <input type="email" className="w-11/12 outline-none h-8 px-2" />
       <button className="bg-primary w-11/12 mt-10 text-white text-sm h-10 rounded-md">Receber Material</button>
       </div>
       </article>

       <article className="mt-5">
      <WomanHero/>
       </article>

        </section>
      </main>

      <main className="w-full h-400 flex flex-col items-center justify-around mt-44 sm:flex-row  sm:items-start sm:mt-20 ">

       <article className="w-80 mt-10">
        <h1 className="tracking-sm text-2xl text-blueText">Aprenda so 09 passos para tornar o seu salão um negócio de sucesso.</h1>
        <h1 className="tracking-xs text-sm  mt-5 opacity-50">Este é um guia para encontrolar e solucionar toda a gestão financeira da sua empresa</h1>
        <h1 className="tracking-sm text-2xl text-blueText mt-5">Passos simples que levarão seu salão para outro nível.</h1>
       </article>

       <article className="py-10  sm:py-0">
        <h1 className="text-blueText text-xl">Passo 01 -<span className="opacity-60 text-black">Restreabilidade</span></h1>
        <h1 className="text-blueText text-xl mt-5">Passo 02 -<span className="opacity-60 text-black"> Plano de contas</span></h1>
        <h1 className="text-blueText text-xl mt-5">Passo 03 -<span className="opacity-60 text-black">Movimentação financeira</span></h1>
        <h1 className="text-blueText text-xl mt-5">Passo 04 -<span className="opacity-60 text-black">Ponto de equilíbrio</span></h1>
        <h1 className="text-blueText text-xl mt-5">Passo 05 -<span className="opacity-60 text-black">Planejamento financeiro</span></h1>
        <h1 className="text-blueText text-xl mt-5">Passo 06 -<span className="opacity-60 text-black">Margem de contribuição</span></h1>
        <h1 className="text-blueText text-xl mt-5">Passo 07 -<span className="opacity-60 text-black">Resultado do exercicio</span></h1>
        <h1 className="text-blueText text-xl mt-5">Passo 08 -<span className="opacity-60 text-black">Analisando resultados</span></h1>
        <h1 className="text-blueText text-xl mt-5">Passo 09 -<span className="opacity-60 text-black">Conclusões e Decisões</span></h1>
       </article>
      </main>
      </>
    )
}