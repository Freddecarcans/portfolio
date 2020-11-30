export default function Footer() {
    return (
        <div className="bottom">
            <a
                href="https://rampup.fr"
                target="_blank"
                rel="noopener noreferrer"
            >
                Made with ❤️ by Me at RampUP{' '}
                <img src="/favicon-Agence-Rampup.ico" alt="Rampup Logo" className="logo" />
            </a>


            <style jsx>{`
                .bottom {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;  
                }

                .bottom img {
                    margin-left: 0.5rem;
                }

                .bottom a {
                    color: inherit;
                    text-decoration: none;  
                }
                .bottom a:hover {
                    text-decoration: underline;
                    color: #602292;
                }
                .logo {
                    height: 1em;
                }    
            `}</style>

        </div>


    )
}