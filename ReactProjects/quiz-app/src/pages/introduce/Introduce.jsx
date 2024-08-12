import React, { useState } from 'react';
import './Introduce.css';
import trivia from '../../images/Trivia2.png';
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom';

const Introduce = () => {
    const difficulty = ["easy", "medium", "hard"]
    const [difficultyChange, setDifficultyChange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTIONS = 10

    const startQuiz = () => {
        if (difficultyChange) {
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }
    }
    return (
        <div className="introduce">
            <div className="introduce-container">
                <img src={trivia} alt="" />
                <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
                <button onClick={startQuiz} className='introduce-btn'>Quize Başla</button>
            </div>
        </div>
    );
}

export default Introduce;