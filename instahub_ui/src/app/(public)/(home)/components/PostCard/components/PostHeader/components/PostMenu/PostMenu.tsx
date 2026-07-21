'use client';

import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

import { images } from '@/assets/images';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { dropdownDangerItemClass, dropdownItemClass } from '../../constants';
import ReportDialog from '../ReportDialog/ReportDialog';
import AboutAccountDialog from '../AboutAccountDialog/AboutAccountDialog';

export default function PostMenu() {
  const [reportOpen, setReportOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <button
              type="button"
              aria-label="More options"
              className="cursor-pointer rounded-full p-2 transition-transform duration-200 hover:scale-110 focus:outline-none"
            />
          }
        >
          <MoreHorizontal size={22} />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          side="bottom"
          align="start"
          sideOffset={6}
          className="w-65 overflow-hidden rounded-2xl border border-(--border-color) bg-[#262626] py-2 shadow-2xl"
        >
          <DropdownMenuItem
            className={dropdownDangerItemClass}
            onClick={() => setReportOpen(true)}
          >
            Report
          </DropdownMenuItem>

          <DropdownMenuItem className={dropdownDangerItemClass}>
            Unfollow
          </DropdownMenuItem>

          <DropdownMenuItem className={dropdownItemClass}>
            Add to favorites
          </DropdownMenuItem>

          <DropdownMenuItem
            className={dropdownItemClass}
            onClick={() => setAboutOpen(true)}
          >
            About this account
          </DropdownMenuItem>

          <DropdownMenuItem className={dropdownItemClass}>
            Go to post
          </DropdownMenuItem>

          <DropdownMenuItem className={dropdownItemClass}>
            Share to...
          </DropdownMenuItem>

          <DropdownMenuItem className={dropdownItemClass}>
            Copy link
          </DropdownMenuItem>

          <DropdownMenuItem className={dropdownItemClass}>
            Embed
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ReportDialog
        open={reportOpen}
        onOpenChange={setReportOpen}
        username="thv"
      />

      <AboutAccountDialog
        open={aboutOpen}
        onOpenChange={setAboutOpen}
        username="thv"
        avatar={images.loginPreview}
        dateJoined="December 2021"
        location="South Korea"
        sharedFollowers={6}
        verifiedDate="December 2021"
      />
    </>
  );
}
