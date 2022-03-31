const Register = () => {
    return (
        <div class="container w-50 ">

            <div class="row">
                <div class="col-12">

                    <p class="text-info text-center fw-bold fs-2 mt-5">Créer votre compte</p>
                    <form class="form needs-validation" novalidate >
                        <div class="form-group  ">
                            <label for="nom" class="mt-2">Nom:</label><br/>
                                <input type="text" id="nom" class="form-control mt-2  " placeholder="Saisissez votre nom ici"
                                    required  ></input>
                                <div class="invalid-feedback">
                                    Le nom est obligatoire.
                                </div>

                                <label for="prenom" class="mt-2">Prénom:</label><br/>
                                    <input type="text" id="prenom" class="form-control mt-2 "
                                        placeholder="Saisissez votre prénom ici" required></input>
                                        <div class="invalid-feedback">
                                            Le prénom est obligatoire.
                                        </div>
                                        <label for="e-mail" class="mt-2">E-mail:</label><br/>
                                            <input type="email" id="e-mail" class="form-control mt-2"
                                                placeholder="Saisissez votre adress e-mail ici" required></input>
                                            <div class="invalid-feedback">
                                                L'adresse e-mail est invalid.
                                            </div>
                                            <label for="motdepasse" class="mt-3">Mot de passe:</label><br/>

                                                <input type="password" id="motdepasse" class="form-control mt-2"
                                                    placeholder="Saisissez votre mot de passe ici" required></input>
                                                <div class="invalid-feedback">
                                                    Le mot de passe est obligatoire.
                                                </div>
                                                <label for="motdepasse2" class="mt-3">Confirmation mot de passe:</label><br/>

                                                    <input type="password" id="motdepasse2" class="form-control mt-2"
                                                        placeholder="Saisissez votre mot de passe ici" required></input>

                                                    <div class="invalid-feedback">
                                                        La confirmation est obligatoire ou bien la confirmation est invalid.
                                                    </div>
                                                    <div class="d-grid gap-2">

                                                        <button id="sub" class="btn btn-success mt-2 pt-1 pb-1 " type="button" onclick="register()">S'insecrire</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                
                                );
}

                                export default Register;