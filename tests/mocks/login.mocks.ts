const validPassword = 'terrível';
const passwordHash = '$2a$10$o/B5IfCRyzyozYzspkjVTufkCLhLqPNGRKmZ75rvilOGUSz4ib19O'
const validUsername = 'Hagar';

const validLoginBody = { username: validUsername, password: validPassword };
const userWithHash = {
	id: 1,
  username: validUsername,
	vocation: 'Guerreiro',
	level: 10,
	password: passwordHash,
}

export default {
  validLoginBody,
	userWithHash,
};