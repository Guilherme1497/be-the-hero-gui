import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem Vinda, AISEC</span>

                <Link className="button" to="incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={16} color="#E02041" />
                </button>
            </header>
        </div>
    )
}