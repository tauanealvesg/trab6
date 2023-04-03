import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'

function SistemaLogin() {
  return (

 <div className='login'>
     

    <Form>
    <span className="login-form-title">Login</span>
      <Form.Group className="mb-3" controlId="formBasicE-mail">
        <Form.Label>Endereço de E-mail</Form.Label>
        <Form.Control type="e-mail" placeholder="Insira e-mail" />
        <Form.Text className="text-muted">
          Nunca compartilharemos seu e-mail com mais ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSenha">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembre-me" />
      </Form.Group>
      <Button variant="primary" type="entrar">
        Entrar
      </Button>
    </Form>
</div>
  );
}

export default SistemaLogin;