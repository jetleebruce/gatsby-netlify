import React from "react"
import Header from "../components/Header"
import { Form, Button } from "react-bootstrap"
import PrimaryLayout from "../layout/PrimaryLayout"

export default () => (
  <PrimaryLayout column="col-10">
    <h1>About Us</h1>
    <p>
      Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
      Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала
      XVI века. В то время некий безымянный печатник создал большую коллекцию
      размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
      Lorem Ipsum не только успешно пережил без заметных изменений пять веков,
      но и перешагнул в электронный дизайн. Его популяризации в новое время
      послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах
      и, в более недавнее время, программы электронной вёрстки типа Aldus
      PageMaker, в шаблонах которых используется Lorem Ipsum.
    </p>

    <Form className="p-5">
      <Form.Group controlId="contactForm.Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email ..." />
      </Form.Group>

      <Form.Group controlId="contactForm.Subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Saubject ..." />
      </Form.Group>

      <Form.Group controlId="contactForm.Message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>

      <Form.Group controlId="contactForm.Submit">
        <Button>Submit</Button>
      </Form.Group>
    </Form>
  </PrimaryLayout>
)
