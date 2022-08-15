import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import qa_light from '../../../../assets/img/homepage/qa_light.svg';

import Button from '@mui/material/Button';

const Accordion = styled((props) => (

    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="faq-area">
            <div className="faq_container">
                <img src={qa_light} alt="" className="faqLight" />
                <div className="faq_left colW">
                    <h2 className='fz84'>Common Questions</h2>
                    <p className='fz27'>WhatsApp has exceeded 2 billion users worldwide, which implies, your child or employee might be using it too for texts, multimedia,and calls. </p>
                    <div className="faq_btns">
                        <Button variant="contained" href="#" className='BlueBtn'>General Questions</Button>
                        <Button variant="outlined" href="#" className='blueLLineBtn'>Technical Questions</Button>
                    </div>
                </div>
                <div className="faq_right ">
                    <div className="faqContent">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>What is TheOneSpy</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    WhatsApp has exceeded 2 billion users worldwide, which implies,
                                    your child or employee might be using it too for texts, multimedia,
                                    and calls.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography>How Does TheOneSpy Works</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    WhatsApp has exceeded 2 billion users worldwide, which implies,
                                    your child or employee might be using it too for texts, multimedia,
                                    and calls.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography>Is TheOneSpy Work Worldwide?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    WhatsApp has exceeded 2 billion users worldwide, which implies,
                                    your child or employee might be using it too for texts, multimedia,
                                    and calls.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                <Typography>Is TheOneSpy Unveil from target device</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    WhatsApp has exceeded 2 billion users worldwide, which implies,
                                    your child or employee might be using it too for texts, multimedia,
                                    and calls.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                <Typography>Is TheOneSpy Usage a legal?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    WhatsApp has exceeded 2 billion users worldwide, which implies,
                                    your child or employee might be using it too for texts, multimedia,
                                    and calls.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                                <Typography>How to get refund</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    WhatsApp has exceeded 2 billion users worldwide, which implies,
                                    your child or employee might be using it too for texts, multimedia,
                                    and calls.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                                <Typography>Can I monitor more than 1 devices?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    WhatsApp has exceeded 2 billion users worldwide, which implies,
                                    your child or employee might be using it too for texts, multimedia,
                                    and calls.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                                <Typography>What would I see on my bank statement</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    WhatsApp has exceeded 2 billion users worldwide, which implies,
                                    your child or employee might be using it too for texts, multimedia,
                                    and calls.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
