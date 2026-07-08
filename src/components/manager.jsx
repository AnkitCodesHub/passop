import React from 'react'
import { useRef, useState, useEffect } from 'react';

const manager = () => {
    const ref = useRef()
    const PasswordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", Password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {
        alert("show the passowrd");
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png";
        }
        else {
            ref.current.src = "icons/eyecross.png";
        }
    }
    const savePassword = () => {
      const newEntry = { site: form.site, username: form.username, passwords: form.Password}
      const updatedPasswords = [...passwordArray, newEntry];
      setPasswordArray(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords))
      setform({site: "", username: "", Password: ""});
    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className=" mycontainer ">
                <h1 className='text-4xl text font-bold text-center'>

                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className="text-green-900 text-lg text-center">Your own Password Manager</p>
                <div className=" flex flex-col p-4 text-black gap-5 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter website url' className="w-full rounded-full border border-green-800    p-4 py-1" type="text" name="site" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter username' className="w-full rounded-full border border-green-500    p-4 py-1" type="text" name="username" id="" />
                        <div className="relative">
                            <input ref={PasswordRef} value={form.Password} onChange={handleChange} placeholder='Enter Password' className="w-full rounded-full border border-green-500    p-4 py-1" type="text" name="Password" id="" />
                            <span className='absolute right-[1px] top-[2px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={30} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>

                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-600 rounded-full px-2 py-2 w-fit hover:bg-green-500 hover:border-2 border-green-800'>
                        <script src="https://cdn.lordicon.com/lordicon.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>
                <div className="passwords"><h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length !== 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                            <thead className='bg-green-800 text-white'>
                                <tr>

                                    <th className='py-2 border border-white text-center w-32'>Site</th>
                                    <th className='py-2 border border-white text-center w-32'>Username</th>
                                    <th className='py-2 border border-white text-center w-32'>Password</th>
                                </tr>

                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => (
                                    <tr key={index}>
                                        <td className='text-center border border-white'>{item.site}</td>
                                        <td className='text-center border border-white'>{item.username}</td>
                                        <td className='text-center border border-white'>{item.Password}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default manager