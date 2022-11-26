import clsx from 'clsx';
import { motion } from 'framer-motion';
import useLastCommit from '@/hooks/useLastCommit';
import dayjs from '@/utils/dayjs';

const LastCommit = () => {
  const { commit, isError } = useLastCommit();

  return commit && !isError ? (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <a
        href={commit.url}
        target="_blank"
        rel="noreferrer"
        className={clsx('hover:underline')}
      >
        <span className={clsx('hidden', 'sm:inline')}>this site was </span>
        <span>updated {dayjs(commit.date).fromNow()}</span>
      </a>
    </motion.div>
  ) : (
    <span>&nbsp;</span>
  );
};

export default LastCommit;