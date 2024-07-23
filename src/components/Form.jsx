import React, { useState } from "react"

export default function Form(props) {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        rating: ''
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    console.log(formData)

    return (
        <form>
            <input
                placeholder="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                placeholder="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <input
                placeholder="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
            />
        </form>
    )
}