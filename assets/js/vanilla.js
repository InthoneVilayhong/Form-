const $ = document; //! convention quand on est faineant

$.addEventListener("DOMContentLoaded", () => {
    //! on attend le chargement du DOM
    $.querySelector("#contact-form").addEventListener("submit", async (e) => {
        e.preventDefault(); //! on supprimer l'event par defaut

        //!creation d'une const pour recuperer les infos input
        const data = {
            firstname: $.querySelector("#firstname").value,
            lastname: $.querySelector("#lastname").value,
            email: $.querySelector("#email").value,
            sujet: $.querySelector("#subject").value,
            message: $.querySelector("#message").value,
        };
        console.log(data); //! juste pour vérifier data que l'on recoit

        //!Requete axios
        const response = await axios.post(
            "https://formulaire-inthone.herokuapp.com/form",
            data
        );

        console.log(response.data);
        alert("You're so good !");

        location.reload(); //! Actualiser la page
    });
});
