import React from "react";

const Liste = (props)  => {
    const contenuListe = fetch(props.donnee).then((rep) =>{ return rep.json()})
    return <section>
        
    </section>


}

export default Liste;

