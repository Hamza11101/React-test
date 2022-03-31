const Register = () => {
    return (
        <div className="container w-50 ">

            <div className="row">
                <div className="col-12">

                    <p className="text-info text-center fw-bold fs-2 mt-5">Créer votre compte</p>
                    <form className="form needs-validation" noValidate >
                        <div className="form-group  ">
                            <label className="mt-2">Nom:</label><br/>
                                <input type="text" id="nom" className="form-control mt-2  " placeholder="Saisissez votre nom ici"
                                    required  ></input>
                                <div className="invalid-feedback">
                                    Le nom est obligatoire.
                                </div>

                                <label  className="mt-2">Prénom:</label><br/>
                                    <input type="text" id="prenom" className="form-control mt-2 "
                                        placeholder="Saisissez votre prénom ici" required></input>
                                        <div className="invalid-feedback">
                                            Le prénom est obligatoire.
                                        </div>
                                        <label  className="mt-2">E-mail:</label><br/>
                                            <input type="email" id="e-mail" className="form-control mt-2"
                                                placeholder="Saisissez votre adress e-mail ici" required></input>
                                            <div className="invalid-feedback">
                                                L'adresse e-mail est invalid.
                                            </div>
                                            <label  className="mt-3">Mot de passe:</label><br/>

                                                <input type="password" id="motdepasse" className="form-control mt-2"
                                                    placeholder="Saisissez votre mot de passe ici" required></input>
                                                <div className="invalid-feedback">
                                                    Le mot de passe est obligatoire.
                                                </div>
                                                <label  className="mt-3">Confirmation mot de passe:</label><br/>

                                                    <input type="password" id="motdepasse2" className="form-control mt-2"
                                                        placeholder="Saisissez votre mot de passe ici" required></input>

                                                    <div className="invalid-feedback">
                                                        La confirmation est obligatoire ou bien la confirmation est invalid.
                                                    </div>
                                                    <div className="d-grid gap-2">

                                                        <button id="sub" className="btn btn-success mt-2 pt-1 pb-1 " type="button" >S'insecrire</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                
                                );
}

                                export default Register;