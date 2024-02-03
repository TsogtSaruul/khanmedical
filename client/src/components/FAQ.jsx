import React from 'react'
import useFaq from '../hooks/useFaq';
import useDepartment from '../hooks/useDepartment';


const FAQ = () => {
    const faqs = useFaq();
    const departments = useDepartment();

    
    return (
        <section className="faq-area section">
            <div className="container">
                {departments?.map((d) => (
                    <div className="row faq-wrap">
                        <div className="col-lg-12">
                            <div className="faq-head">
                                <h2>{d.title}</h2>
                            </div>
                            <div className="faq-item">
                                <ul className="accordion">
                                    {faqs?.map((f) => 
                                        f.department == d.id ?
                                        (
                                            <li
                                                className="wow fadeInUp"
                                                data-wow-delay=".3s"
                                                style={{
                                                    visibility: "visible",
                                                    animationDelay: "0.3s",
                                                    animationName: "fadeInUp",
                                                }}
                                            >
                                                <a href="#" className="active">{f.question}</a>
                                                <p style={{ display: "block" }}>
                                                    {f.answer}
                                                </p>
                                            </li>
                                        ):null
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}                
            </div>
        </section>
    )
}

export default FAQ