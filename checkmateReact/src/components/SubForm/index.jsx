import { useForm } from "react-hook-form";
import axios from "axios";

const SubForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => {
        axios.post("http://localhost:8080/post", data)
        .then((response) => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="pseudo">Pseudo : </label>
                <input {...register("pseudo", { required: true, maxLength: 25,pattern: /^[A-Za-z\-0-9]+$/i})} />
                {errors.pseudo && <span>Veuillez entrez un pseudo sans caractères spéciaux et max 25 caractères</span>}
            </div>
            <div>
                <label htmlFor="email">E-mail : </label>
                <input {...register("email", { required: true,pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                {errors.email && <span>Veuillez entrez une adresse mail correcte</span>}
            </div>
            <div>
                <label htmlFor="mdp">Mot de passe : </label>
                <input {...register("mdp", { required: true, maxLength: 25, minLength:6})} />
                {errors.mdp && <span>Veuillez entrez un mot de passe d'au moins 6 caractères et max 25</span>}
            </div>
            <div>
                <label htmlFor="naissance">Date de naissance : </label>
                <input type="date" {...register("naissance", { valueAsDate: true })}
/>
            </div>
            <div>
                <label htmlFor="genre">Genre : </label>
                Homme<input {...register("genre")} type="radio" value="homme" />
                Femme<input {...register("genre")} type="radio" value="femme" />
            </div>
            
            <div>
                <label htmlFor="rank">Rang(1200 par défaut) : </label>
                <input type="number" {...register("rank", { required: true,min: 0, max: 3000, value:1200})} />
                {errors.rank && <span>Veuillez entrez un rang entre 0 et 3000</span>}
            </div>
            <div>
                <label htmlFor="role">rôle : </label>
                Participant <input {...register("role")} type="radio" value="user" />
                Admin <input {...register("role")} type="radio" value="admin" />
            </div>
            <input type="submit" />
        </form>
    )
}

export default SubForm