import { useEffect } from 'react'
import Wallets from '/img/wallets.svg'
import Google from '/img/google.svg'
import Telegram from '/img/telegram.svg'

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-2xl p-10 w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-8">Login Dashboard</h2>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => console.log('wallets')}
            className="flex items-center justify-start gap-2 w-full px-4 py-4 border border-transparent text-black bg-lite-grey hover:border-blue transition-colors duration-300 rounded-2xl"
          >
            <img src={Wallets} alt="Wallets icon" width={24} height={24} />
            Connect Wallets
          </button>

          <button
            onClick={() => console.log('google')}
            className="flex items-center justify-start gap-2 w-full px-4 py-4 border border-transparent text-black bg-lite-grey hover:border-blue transition-colors duration-300 rounded-2xl"
          >
            <img src={Google} alt="Google icon" width={24} height={24} />
            Continue with Google
          </button>

          <button
            onClick={() => console.log('telegram')}
            className="flex items-center justify-start gap-2 w-full px-4 py-4 border border-transparent text-black bg-lite-grey hover:border-blue transition-colors duration-300 rounded-2xl"
          >
            <img src={Telegram} alt="Telegram icon" width={24} height={24} />
            Continue with Telegram
          </button>
        </div>
      </div>
    </div>
  );
}
