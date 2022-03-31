import { useState } from "react";


const Register = () => {
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Email, setEmail] = useState("");
    const [PassWord, setPassWord] = useState("")



    const handleSubmit=(e)=>{
        console.log(e);
        e.preventDefault();
    const user = { FName, LName, Email,PassWord };

    fetch('http://localhost:8000/Users/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
    }

    return (
        <div className="container w-50 ">

            <div className="row">
                <div className="col-12">

                    <p className="text-info text-center fw-bold fs-2 mt-5">Créer votre compte</p>
                    <form className="form needs-validation" noValidate onSubmit={handleSubmit} >
                        <div className="form-group  ">
                            <label className="mt-2">Nom:</label><br/>
                                <input type="text" id="nom" className="form-control mt-2  " placeholder="Saisissez votre nom ici"
                                    required 
                                    value={FName}
                                    
                                    onChange={(e)=>setFName(e.target.value)}
                                    ></input>
                                <div className="invalid-feedback">
                                    Le nom est obligatoire.
                                </div>

                                <label  className="mt-2">Prénom:</label><br/>
                                    <input type="text" id="prenom" className="form-control mt-2 "
                                        placeholder="Saisissez votre prénom ici" required
                                        value={LName}
                 onChange={(e)=>setLName(e.target.value)}
                                        ></input>
                                        <div className="invalid-feedback">
                                            Le prénom est obligatoire.
                                        </div>
                                        <label  className="mt-2">E-mail:</label><br/>
                                            <input type="email" id="e-mail" className="form-control mt-2"
                                                placeholder="Saisissez votre adress e-mail ici" required
                                                value={Email}
                                                onChange={(e)=>setEmail(e.target.value)}
                                                ></input>
                                            <div className="invalid-feedback">
                                                L'adresse e-mail est invalid.
                                            </div>
                                            <label  className="mt-3">Mot de passe:</label><br/>

                                                <input type="password" id="motdepasse" className="form-control mt-2"
                                                    placeholder="Saisissez votre mot de passe ici" required
                                                    value={PassWord}
                 onChange={(e)=>setPassWord(e.target.value)}></input>
                                                <div className="invalid-feedback">
                                                    Le mot de passe est obligatoire.
                                                </div>
                                               
                                                    <div className="d-grid gap-2">

                                                        <button id="sub" className="btn btn-success mt-2 pt-1 pb-1 " type="submit" >S'insecrire</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                
                                );
}

                                export default Register;