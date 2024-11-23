import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { IconButton } from '@/components/common/IconButton';
import { Input } from '@/components/common/Input';
import { ListCard } from '@/components/common/ListCard';
import { Modal } from '@/components/common/Modal';
import { Body1, Body2, Body3 } from '@/components/common/Typography';
import { findyIconNames } from '@/constants/findyIcons';
import { useBookMarkList } from '@/hooks/api/bookmarks/useBookMarkList';
import { useNewBookMark } from '@/hooks/api/bookmarks/useNewBookMark';
import { useAuth } from '@/hooks/auth/useAuth';

type Props = { onNext: (bookmarkId: number) => void };
export const BookmarkList = ({ onNext }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bookmarkName, setBookmarkName] = useState<string>('');

  const { token } = useAuth();
  const { data } = useBookMarkList(token);
  const newBookmarkMutation = useNewBookMark(token);

  const handleAddBookmark = () => {
    if (!bookmarkName.trim()) return;
    newBookmarkMutation.mutate(
      { name: bookmarkName.trim() },
      {
        onSuccess: () => {
          setBookmarkName('');
          setIsOpen(false);
        },
      }
    );
  };

  const handleBookmarkClick = (bookmarkId: number) => {
    onNext(bookmarkId);
  };
  return (
    <>
      <Body1 className="my-4 mx-3" weight="semibold">
        나의 핀디 리스트
      </Body1>
      <ListCard>
        <div
          className="w-full flex flex-row items-center gap-4 pb-4 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <IconButton name="bookMark" />
          <Body2 weight="medium" className="text-gray-400">
            새 장소 추가하기
          </Body2>
        </div>
        <hr className="border-dashed pt-2" />
        {data?.data.map((item, index) => (
          <div key={item.bookmarkId}>
            <div
              onClick={() => handleBookmarkClick(item.bookmarkId)}
              className="flex flex-row justify-between items-center cursor-pointer"
            >
              <div className="flex flex-row gap-4 py-2.5 items-center justify-center">
                {item.youtuberProfile ? (
                  <img
                    src={item.youtuberProfile}
                    className="w-12 h-12 rounded-full"
                    alt={`${item.name}의 프로필 이미지`}
                  />
                ) : (
                  <Icon
                    name={findyIconNames[index % findyIconNames.length]}
                    className="w-11 h-11"
                  />
                )}
                <div className="flex flex-col py-1">
                  <Body2 weight="medium">{item.name}</Body2>
                  <div className="flex flex-row items-center gap-1">
                    <Icon name="location" size={15} />
                    <Body3 className=" text-gray-500">{item.markersCount}</Body3>
                  </div>
                </div>
              </div>
            </div>
            {index < data.data.length - 1 && <hr className="border-dashed pt-2" />}
          </div>
        ))}
      </ListCard>
      <Modal isOpen={isOpen}>
        <div className="p-1 max-w-80">
          <Body2 className="pb-3" weight="semibold">
            장소 추가
          </Body2>
          <Input
            value={bookmarkName}
            placeholder="새 장소 이름을 입력하세요."
            isValid={bookmarkName.length >= 1}
            errorMessage="1글자 이상 입력해야 합니다."
            onClickReset={() => setBookmarkName('')}
            onChange={(e) => setBookmarkName(e.target.value)}
          />
          <div className="flex gap-4 mt-4">
            <Button variant="gray" size="medium" onClick={() => setIsOpen(false)}>
              취소
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={handleAddBookmark}
              disabled={!bookmarkName.trim()}
            >
              추가하기
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
