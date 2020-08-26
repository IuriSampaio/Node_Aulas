import {api} from './api';

const CHAVE_ALUNO = "@aluno";

export const signIn = ( aluno ) => {
	localStorage.setItem(CHAVE_ALUNO,JSON.stringify(aluno))

	api.defaults.headers.common['Authorization'] = `Bearer ${aluno.token}`;
};

export const signOut = () => {
	localStorage.clear();
	api.defaults.headers.common['Authorization'] = undefined;
};

export const getAluno = () => {
	const { aluno } = JSON.parse(localStorage.getItem(CHAVE_ALUNO));

	return aluno; 
};

export const isSignIn = () => {
	const aluno  = JSON.parse(localStorage.getItem(CHAVE_ALUNO));
	api.defaults.headers.common['Authorization'] = `Bearer ${aluno.token}`;
	return aluno ? true : false; 
};
