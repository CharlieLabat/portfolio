import React, { useState } from "react";
import Card from "./Card";

const Liste = (props)  => {
    const [contenu, setContenu] = useState(null)
        fetch(props.donnee).then((rep) =>{ return rep.json()}).then((data) => {setContenu(data)})
    return <section>
        {contenu.map((element) =>{
            return (contenu) ? <Card/> : "Pas d'article"
        })}
    </section>


}

export default Liste;

