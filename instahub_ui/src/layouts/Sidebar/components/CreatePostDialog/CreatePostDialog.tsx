'use client';

import type { ChangeEvent, DragEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from '@/components/ui/dialog';
import CreatePostHeader from './components/CreatePostHeader';
import PostCaptionEditor from './components/PostCaptionEditor';
import PostMediaEditor from './components/PostMediaEditor';
import {
  CAPTION_IDEAS,
  MAX_CAPTION_LENGTH,
  MAX_IMAGE_SIZE
} from '../../../../data/constants';
import { createAiArtwork } from './createAiArtwork';

interface CreatePostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreatePostDialog({
  open,
  onOpenChange
}: CreatePostDialogProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isLocalImage, setIsLocalImage] = useState(false);
  const [caption, setCaption] = useState('');
  const [imagePrompt, setImagePrompt] = useState('');
  const [captionPrompt, setCaptionPrompt] = useState('');
  const [showImageAi, setShowImageAi] = useState(false);
  const [showCaptionAi, setShowCaptionAi] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isGeneratingCaption, setIsGeneratingCaption] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    return () => {
      if (isLocalImage && imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl, isLocalImage]);

  const resetForm = () => {
    setImageUrl('');
    setIsLocalImage(false);
    setCaption('');
    setImagePrompt('');
    setCaptionPrompt('');
    setShowImageAi(false);
    setShowCaptionAi(false);
    setShowEmojiPicker(false);
    setMessage('');
  };

  const handleOpenChange = (nextOpen: boolean) => {
    onOpenChange(nextOpen);
    if (!nextOpen) resetForm();
  };

  const resetMedia = () => {
    setImageUrl('');
    setIsLocalImage(false);
    setShowImageAi(false);
    setIsGeneratingImage(false);
    setMessage('');
  };

  const handleBack = () => {
    if (imageUrl || showImageAi) {
      resetMedia();
      return;
    }

    handleOpenChange(false);
  };

  const selectImage = (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setMessage('Please choose an image file.');
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setMessage('The image must be smaller than 10 MB.');
      return;
    }

    setImageUrl(URL.createObjectURL(file));
    setIsLocalImage(true);
    setShowImageAi(false);
    setMessage('');
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    selectImage(event.target.files?.[0]);
    event.target.value = '';
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    selectImage(event.dataTransfer.files?.[0]);
  };

  const generateImage = () => {
    if (!imagePrompt.trim()) {
      setMessage('Describe the image you want AI to create.');
      return;
    }

    setMessage('');
    setIsGeneratingImage(true);
    window.setTimeout(() => {
      setImageUrl(createAiArtwork(imagePrompt));
      setIsLocalImage(false);
      setShowImageAi(false);
      setIsGeneratingImage(false);
    }, 700);
  };

  const generateCaption = () => {
    setIsGeneratingCaption(true);
    window.setTimeout(() => {
      const topic = captionPrompt.trim();
      const idea =
        CAPTION_IDEAS[
          (topic.length || CAPTION_IDEAS.length) % CAPTION_IDEAS.length
        ];
      setCaption(
        topic ? `${idea}\n\n#${topic.replaceAll(/\s+/g, '')} #InstaHub` : idea
      );
      setIsGeneratingCaption(false);
      setShowCaptionAi(false);
    }, 550);
  };

  const addEmoji = (emoji: string) => {
    setCaption((current) => `${current}${emoji}`.slice(0, MAX_CAPTION_LENGTH));
  };

  const sharePost = () => {
    if (!imageUrl || isSharing) return;
    setIsSharing(true);
    window.setTimeout(() => {
      setIsSharing(false);
      handleOpenChange(false);
    }, 700);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className='flex flex-col h-138.75 min-w-215 gap-0 overflow-hidden rounded-2xl border border-white/15 bg-[#262626] p-0 text-white shadow-2xl ring-0'
      >
        <CreatePostHeader
          canShare={Boolean(imageUrl)}
          canGoBack={Boolean(imageUrl || showImageAi)}
          isSharing={isSharing}
          onBack={handleBack}
          onShare={sharePost}
        />

        <div className='grid min-h-0 flex-1 md:grid-cols-[minmax(0,1fr)_340px]'>
          <PostMediaEditor
            imageUrl={imageUrl}
            imagePrompt={imagePrompt}
            showImageAi={showImageAi}
            isGeneratingImage={isGeneratingImage}
            message={message}
            inputRef={inputRef}
            onDrop={handleDrop}
            onFileChange={handleFileChange}
            onImagePromptChange={setImagePrompt}
            onShowImageAiChange={setShowImageAi}
            onGenerateImage={generateImage}
          />
          <PostCaptionEditor
            caption={caption}
            captionPrompt={captionPrompt}
            showCaptionAi={showCaptionAi}
            showEmojiPicker={showEmojiPicker}
            isGeneratingCaption={isGeneratingCaption}
            onCaptionChange={setCaption}
            onCaptionPromptChange={setCaptionPrompt}
            onShowCaptionAiChange={setShowCaptionAi}
            onShowEmojiPickerChange={setShowEmojiPicker}
            onEmojiClick={addEmoji}
            onGenerateCaption={generateCaption}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
