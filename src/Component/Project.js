import React from 'react'
import '../Css/Project.css'
import Image from '../Images/img-1.png'
import ProjectList from './ProjectList'
const Project = () => {
    const projects = [
        {
            title : 'Bank Management System',
            url : 'https://github.com/rubal1234/Banking-Management-System/tree/master/BankAplication',
            sub_title : 'Language used are Java | Advance Java | Servlet | mySql | HTML | CSS | JS',
            desc : 'The Banking Management System is a comprehensive software solution designed to streamline and automate various banking operations and processes. It provides an integrated platform for managing day-to-day banking activities, customer accounts, transactions, and other related tasks.With the Banking Management System, banks can effectively manage their operations, improve efficiency, and enhance customer service. The system offers a range of features and functionalities that cater to the diverse needs of banks, including'
        },
        {
            title : 'Facebook Clone',
            url : 'https://github.com/rubal1234/facebook',
            sub_title : 'Language used are Php | mySql | Bootstrap5 | jQuery | HTML | CSS',
            desc : 'Welcome to my Facebook Clone project! This project aims to recreate the core features and functionalities of the popular social media platform, Facebook. By building this clone, I have sought to provide users with a familiar and immersive experience that closely resembles the original Facebook interface.'
        },
        {
            title : 'Budgety Calculator',
            url : 'https://github.com/rubal1234/Budgety-Calculator/tree/master/Budgety%20Calculator/WebContent',
            sub_title : 'Language used are Javascript | HTML | CSS',
            desc : 'Welcome to Budgety Calculator, a handy tool built with JavaScript, HTML, and CSS to help you keep track of your income and expenses. With this intuitive and user-friendly application, you can effectively manage your financial records and gain insights into your budgeting habits'
        },
        {
            title : 'Hostel App UI',
            url : 'https://github.com/rubal1234/Hostel-App',
            sub_title : 'Language used are Bootstrap5 | jQuery | HTML | CSS',
            desc : 'Introducing Hostel App - Your Ultimate Solution for Finding Hostel. Welcome to the Hostel App, a powerful tool designed to simplify the process of creating and planning hostel spaces. Whether you are an architect, interior designer, or hostel owner, this app is your go-to resource for crafting functional, aesthetically pleasing, and efficient hostel environments'
        }
    ]
  return (
    <section id="projects">
        <div class="projects container">
            <div class="projects-header p-3 p-sm-0">
                <h1 class="section-title">Proj<span>ects</span></h1>
            </div>
            <div class="all-projects">
                {projects.map( (oldval,index) => {
                    return <ProjectList key = {index} title = {oldval.title} url = {oldval.url} sub_title = {oldval.sub_title} desc = {oldval.desc} img = {Image}></ProjectList>
                })}
            </div>
        </div>
  </section>
  )
}

export default Project