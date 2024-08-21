'use client'
import { useRouter } from 'next/navigation'
import BackIcon from '../icons/back_icon';

const BackButtonComponent = () => {
    const router = useRouter()

    return (
        <button
            type="button"
            className="flex gap-2 py-2"
            onClick={() => router.back()}
        >
            <BackIcon />
            Voltar
        </button>
    );
}

export default BackButtonComponent;