import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

export function SignInButton() {
    const session = useSession()
    
    console.log(session);
    return session.status === "authenticated" ? (
        <button
        className={styles.signInButton}
        type="button"
        onClick={() => signOut()}
        >
            <FaGithub color='#04d361'/>
                {session.data.user.name}
            <FiX className={styles.closeIcon} color='#737380'/>
        </button>
    ) : (
        <button 
        className={styles.signInButton}
        type="button"
        onClick={() => signIn('github')}
        >
            <FaGithub color='#eba417'/>
            Sign in with Github
        </button>
    )
}