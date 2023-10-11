import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from "./NotFoundPage.module.css"

function NotFoundPage() {

    const navigate = useNavigate()

  return (
    <div className={s.notFoundWrapper}>
      <h1>Error 404</h1>
      <p>Oops,the page you're looking for could not be found</p>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default NotFoundPage
