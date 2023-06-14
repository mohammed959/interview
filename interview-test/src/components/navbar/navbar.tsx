
import { useState } from "react"
import { useIntl } from "react-intl"
import { Container, Row, Col } from "react-bootstrap"
import stcLogo from '../../assets/logo.svg'

type NavBarProps = {
    onLocaleChange: (locale: string) => void
}

export const Navbar = ({ onLocaleChange }: NavBarProps) => {
    const intl = useIntl()
    console.log(intl)
    const [languate, setLanguate] = useState("en")
    return (
        <Container className="pt-4 text-white">
            <Row>
                <Col className="">
                    <img src={stcLogo} />
                </Col>
                <Col >
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <button onClick={() => {
                            setLanguate(prevState => prevState === "en" ? "ar" : "en")
                            localStorage.setItem("direction",languate)
                            return onLocaleChange(languate)
                        }}>{intl.formatMessage({ id: "language" })}</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}