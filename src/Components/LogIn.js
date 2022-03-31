const LogIn = () => {
    return (

        <div className="container w-50 ">
            <div className="row">
                <div className="col-12">

                    <p className="text-info text-center fw-bold fs-2 mt-5">Page d'authentification </p>
                    <form className="form needs-validation" noValidate>
                        <div className="form-group  ">
                            <label  className="mt-2">E-mail:</label><br />
                            <input type="email" id="e-mail" className="form-control mt-2"
                                placeholder="Saisissez votre adress e-mail ici" required></input>
                            <div className="invalid-feedback">
                                L'adress email est invalid.
                            </div>
                            <label  className="mt-3">Mot de passe:</label><br />

                            <input type="password" id="motdepasse" className="form-control mt-2"
                                placeholder="Saisissez votre mot de passe ici" required></input>
                            <div className="invalid-feedback">
                                Le mot de passe est obligatoire.
                            </div>
                            <div className="d-grid gap-2">

                                <button className="btn btn-success mt-2 pt-1 pb-1 " type="button" >Connexion</button>
                            </div>
                            <p className="text-center mt-3"><a href="register.html"> S'insecrire</a></p>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    






















     );
}

export default LogIn;