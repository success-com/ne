import ContactPage from "./ContactPage"
import About from "./About"

export default [
    {
      id: 1,
      prev: "HOME",
      next: "CONTACT",
      messages: [
        "Avec notre créativité sans limites et notre expertise inégalée, nous transformons vos rêves en succès concrets.",
        "Préparez-vous à être époustouflé ! Success Com repousse les frontières de l'innovation pour vous offrir des résultats exceptionnels.",
        "Que vous visiez le sommet du marché ou que vous souhaitiez simplement vous démarquer, Success Com est votre partenaire de choix pour atteindre vos objectifs.",
        "Entrez dans l'univers de Success Com, où chaque projet est une opportunité de briller et de se démarquer."
        ]
    },
    {
      id: 2,
      next: "ABOUT",
      prev: "CONTACT",
      contentOnly: true,
      pageContent: <ContactPage />,
    /**  messages: [
        "Avec notre créativité sans limites et notre expertise inégalée, nous transformons vos rêves en succès concrets.",
        "Préparez-vous à être époustouflé ! Success Com repousse les frontières de l'innovation pour vous offrir des résultats exceptionnels.",
        "Que vous visiez le sommet du marché ou que vous souhaitiez simplement vous démarquer, Success Com est votre partenaire de choix pour atteindre vos objectifs.",
        "Entrez dans l'univers de Success Com, où chaque projet est une opportunité de briller et de se démarquer."
        ] **/
    },
    {
      id: 3,
      next: "JOIN",
      prev: "ABOUT",
      contentOnly: true,
      pageContent: <About />,
    /**  messages: [
        "Avec notre créativité sans limites et notre expertise inégalée, nous transformons vos rêves en succès concrets.",
        "Préparez-vous à être époustouflé ! Success Com repousse les frontières de l'innovation pour vous offrir des résultats exceptionnels.",
        "Que vous visiez le sommet du marché ou que vous souhaitiez simplement vous démarquer, Success Com est votre partenaire de choix pour atteindre vos objectifs.",
        "Entrez dans l'univers de Success Com, où chaque projet est une opportunité de briller et de se démarquer."
        ] **/
    },
    ]
    