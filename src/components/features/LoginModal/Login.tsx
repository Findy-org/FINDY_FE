import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { Modal } from '@/components/common/Modal';
import { Body1 } from '@/components/common/Typography';
import { ENV } from '@/lib/env';

import { Props } from './Login.types';

export const Login = ({ isOpen, setIsOpen }: Props) => {
  const handleAuth = async (auth: 'kakao' | 'naver') => {
    window.location.href = `${ENV.API_BASE_URL}oauth2/authorization/${auth}`;
  };
  return (
    <Modal isOpen={isOpen} onClickOutside={() => setIsOpen(false)}>
      <div className="flex flex-col gap-6 items-center ">
        <Body1 className="text-center mt-4">{`저장 기능은 회원 전용이에요.\n지금 로그인하시겠어요?`}</Body1>
        <div className="flex flex-row gap-6 items-center mb-1.5">
          <Icon
            name="naverLogin"
            size={60}
            className="cursor-pointer"
            onClick={() => handleAuth('naver')}
          />
          <Icon
            name="kakaoLogin"
            size={60}
            className="cursor-pointer"
            onClick={() => handleAuth('kakao')}
          />
        </div>
        <Button variant="gray" size="medium" onClick={() => setIsOpen(!isOpen)}>
          비회원으로 계속하기
        </Button>
      </div>
    </Modal>
  );
};
