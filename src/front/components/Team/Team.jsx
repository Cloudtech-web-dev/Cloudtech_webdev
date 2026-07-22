import { teamContent } from "../../utils/teamContent"
import { Card } from "./Card"
import teamBg from "../../assets/img/teamBackground.jpg"
import { Trans, useTranslation } from "react-i18next"
import { useState } from "react"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../styles/StickyLayout.css"
import "../../styles/Accordion.css"


export const Team = () => {
    const { t } = useTranslation();
    const [selectedMember, setSelectedMember] = useState({
        name: teamContent[0].name,
        position: t(teamContent[0].position),
        description: t(teamContent[0].description),
        mailLink: teamContent[0].mailLink,
        linkedinLink: teamContent[0].linkedinLink,
        githubLink: teamContent[0].githubLink || null
    });

    return (
        <section className="d-flex justify-content-center">
            < div className="container py-4">
                <div className="category-header-centered">
                    <h2 className="page-intro-title">
                        <Trans i18nKey={'team.sectionTitle'} components={[<span className="highlighted-text" />]} />
                    </h2>
                    <p className="text-white font-p1">{t('team.sectionDescription')}</p>
                </div>
                <div className="row pt-5 align-items-start">
                    <div className="col-lg-7 col-md-12 mb-4">
                        <div className="row">
                            {teamContent.map(teamMember => {
                                const isSelected = selectedMember && selectedMember.name === teamMember.name;

                                return (
                                    <div key={teamMember.id} className="col-12 col-sm-6 d-flex flex-column mb-4"
                                        onClick={() => setSelectedMember({
                                            name: teamMember.name,
                                            position: t(teamMember.position),
                                            description: t(teamMember.description),
                                            mailLink: teamMember.mailLink,
                                            linkedinLink: teamMember.linkedinLink,
                                            githubLink: teamMember.githubLink || null
                                        })}
                                    >
                                        <Card
                                            name={teamMember.name}
                                            position={t(teamMember.position)}
                                            image={teamMember.image}
                                            catImage={teamMember.catImage}
                                        />

                                        <div className={`description-collapse-wrapper d-lg-none ${isSelected ? 'is-open' : ''}`}>
                                            <div className="description-collapse-content">
                                                <div className="d-flex flex-column justify-content-start gap-3 mt-3 text-start">
                                                    <p className="fs-5 text-white">
                                                        {selectedMember.description}
                                                    </p>
                                                    <div className="d-flex justify-content-start display-3 gap-4">
                                                        <a href={`mailto:${selectedMember.mailLink}`} rel="noopener noreferrer" className="text-white"><FontAwesomeIcon icon={faEnvelope} /></a>
                                                        <a href={selectedMember.linkedinLink} rel="noopener noreferrer" target="_blank" className="text-white"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                        {selectedMember.githubLink && (
                                                            <a href={selectedMember.githubLink} rel="noopener noreferrer" target="_blank" className="text-white"><FontAwesomeIcon icon={faGithubSquare} /> </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>

                    </div>
                    {selectedMember && (
                        <div className="col-lg-5 d-none d-lg-flex flex-column col-md-12 mb-4 d-flex flex-column justify-content-start gap-3 sticky-sidebar-column">
                            <div className="bg-positive-title section-title-positive">{selectedMember.name}</div>
                            <span className="text-white fs-4">{selectedMember.position}</span>
                            <p className="fs-5 text-white">
                                {selectedMember.description}
                            </p>
                            <div className="d-flex justify-content-start fs-1 gap-3">
                                <a href={`mailto:${selectedMember.mailLink}`} rel="noopener noreferrer" className="text-white"><FontAwesomeIcon icon={faEnvelope} /></a>
                                <a href={selectedMember.linkedinLink} rel="noopener noreferrer" target="_blank" className="text-white"><FontAwesomeIcon icon={faLinkedin} /></a>
                                {selectedMember.githubLink && (
                                    <a href={selectedMember.githubLink} rel="noopener noreferrer" target="_blank" className="text-white"><FontAwesomeIcon icon={faGithubSquare} /> </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </section >
    )
}