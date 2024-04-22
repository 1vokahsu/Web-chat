import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const useValidation = (value, validations) => {
	const [isEmpty, setEmpty] = useState(true)
	

	useEffect( () => {
		for (const validation in validations) {
			switch (validation) {
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true)
					break;
				default:
					break;
			}
		}
	}, [value])
	return {
		isEmpty
	}
}
const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue)
	// const [values, setValues] = useState(initialValue)
	const [isDirty, setDirty] = useState(false)
	const valid = useValidation(value, validations)

	const onChange = (e) => {
		setValue(e.target.value)
	}
	const onBlur = (e) => {
		setDirty(true)
	}


	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...valid
	}

}
// , userExisted: false
const Home = ({socket}) => {
	const userName = useInput('', {isEmpty: true})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
		localStorage.setItem("userName", userName.value)
		// console.log(userName.value)
		socket.emit('newUser', { user_name: userName.value, socketID: socket.id })
		navigate("/chat")
    }
  return (
		<form className='home__container' onSubmit={handleSubmit}>
			<h2 className='home__header'>Войдите в систему</h2>
			{userName.isDirty && userName.isEmpty && (
				<div style={{ color: ''}}>Поле имени не может быть пустым</div>
			)}
			<input
				onBlur={e => userName.onBlur(e)}
				type='text'
				minLength={1}
				name='username'
				id='username'
				className='username__input'
				placeholder='Введите имя'
				value={userName.value}
				onChange={e => userName.onChange(e)}
			/>
			<button disabled={userName.isEmpty} className='home__cta'>
				Войти
			</button>
		</form>
	)
}

export default Home