import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

export default function StudyGuide({ problem }) {
    return (
        <div>
            <div>
                {problem.studyGuide ? (
                    problem.studyGuide.map((hint, idx) => (
                        <Accordion
                            key={idx}
                            style={{ color: '#fff', backgroundColor: '#23272a' }}
                        >
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon style={{ color: '#fff' }} />}
                                aria-controls={`${idx}-panel-content`}
                                id={`${idx}-panel-header`}
                            >
                                <Typography component="span">
                                    <strong>{hint.title}</strong>
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                {hint.content}
                                <hr />
                                <small>Click for more info on <a href={hint.link} target='_blank'>{hint.title.toLowerCase()}</a></small>
                            </AccordionDetails>
                        </Accordion>
                    ))
                ) : (
                    <>
                        <h1 className="problem-title">Study Guide</h1>
                        <p>🚧 Under Construction 🚧</p>
                    </>
                )}

            </div>
        </div >
    )
}