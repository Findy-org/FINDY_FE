import { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/common/Button';
import { IconButton } from '@/components/common/IconButton';
import { Input } from '@/components/common/Input';
import { ListCard } from '@/components/common/ListCard';
import { Modal } from '@/components/common/Modal';
import { Profile } from '@/components/common/Profile';
import { Body1, Body2 } from '@/components/common/Typography';
import { useBookMarkList } from '@/hooks/api/bookmarks/useBookMarkList';
import { useDeleteBookmark } from '@/hooks/api/bookmarks/useDeleteBookmark';
import { useNewBookMark } from '@/hooks/api/bookmarks/useNewBookMark';
import { useAuth } from '@/hooks/auth/useAuth';

import { Delete } from '../DeleteModal';

type Props = { onNext: (bookmarkId: number) => void };
export const BookmarkList = ({ onNext }: Props) => {
  const [isNewBookmarkMode, setIsNewBookmarkMode] = useState<boolean>(false);
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [bookmarkName, setBookmarkName] = useState<string>('');
  const observerTarget = useRef<HTMLDivElement>(null);

  const { token } = useAuth();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useBookMarkList(token);

  const deleteBookmarkMutation = useDeleteBookmark();
  const newBookmarkMutation = useNewBookMark(token);

  const handleAddBookmark = () => {
    if (!bookmarkName.trim()) return;
    newBookmarkMutation.mutate(
      { name: bookmarkName.trim() },
      {
        onSuccess: () => {
          setBookmarkName('');
          setIsNewBookmarkMode(false);
        },
      }
    );
  };

  const handleBookmarkClick = (bookmarkId: number) => {
    if (isEditing) {
      return setSelectedId((prev) => (prev === bookmarkId ? 0 : bookmarkId));
    }
    onNext(bookmarkId);
  };

  const handleDelete = () => {
    if (selectedId !== 0) {
      deleteBookmarkMutation.mutate({ token, bookmarkId: selectedId });
      setSelectedId(0);
      setIsDeleteMode(false);
      setIsEditing(false);
    }
  };

  const handleCancelEditing = () => {
    setIsEditing(false);
    setSelectedId(0);
  };

  const selectedItemName =
    data?.pages.flatMap((page) => page.data).find((item) => item.bookmarkId === selectedId)?.name ||
    '북마크';

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    });

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <>
      <Body1 className="my-4 mx-3">나의 핀디 리스트</Body1>
      <ListCard>
        <div
          className="w-full flex flex-row items-center gap-4 pb-4 cursor-pointer"
          onClick={() => setIsNewBookmarkMode(true)}
        >
          <IconButton name="bookMark" />
          <Body2 className="text-gray-400">새 장소 추가하기</Body2>
        </div>
        <hr className="border-dashed pt-2" />
        {data?.pages
          .flatMap((page) => page.data)
          .map((item, index) => (
            <Profile
              item={item}
              onSelect={handleBookmarkClick}
              selectedId={selectedId}
              isEditing={isEditing}
              isLast={index === data.pages.flatMap((page) => page.data).length - 1}
            />
          ))}
        <div ref={observerTarget} />
      </ListCard>
      <div className="flex gap-4 mt-5">
        {isEditing ? (
          <>
            <Button variant="gray" size="large" onClick={handleCancelEditing}>
              돌아가기
            </Button>
            <Button
              variant="primary"
              size="large"
              disabled={selectedId === 0}
              onClick={() => setIsDeleteMode(true)}
            >
              삭제하기
            </Button>
          </>
        ) : (
          <Button variant="primary" size="large" onClick={() => setIsEditing(true)}>
            수정하기
          </Button>
        )}
      </div>
      <Delete
        item={selectedItemName}
        onClickDelete={handleDelete}
        isOpen={isDeleteMode}
        setIsOpen={setIsDeleteMode}
      />

      <Modal isOpen={isNewBookmarkMode}>
        <div className="p-1 max-w-80">
          <Body1 className="pb-3" weight="semibold">
            장소 추가
          </Body1>
          <Input
            value={bookmarkName}
            placeholder="새 장소 이름을 입력하세요."
            isValid={bookmarkName.length >= 1}
            errorMessage="1글자 이상 입력해야 합니다."
            onClickReset={() => setBookmarkName('')}
            onChange={(e) => setBookmarkName(e.target.value)}
          />
          <div className="flex gap-4 mt-4">
            <Button variant="gray" size="medium" onClick={() => setIsNewBookmarkMode(false)}>
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
