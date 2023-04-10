import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTitle() {
  const controls = useAnimationControls();

  return (
    <div>
      <m.div
        className={clsx(
          'mb-1 flex items-center gap-1 text-2xl text-slate-600',
          'md:mb-0 md:gap-2 md:text-4xl',
          'dark:text-slate-400'
        )}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        hi!
        <m.div
          initial={{
            opacity: 0,
            y: 16,
            rotate: 30,
            transformOrigin: 'right center',
          }}
          animate={controls}
          transition={{
            type: 'spring',
            delay: 0.35,
            bounce: 0.7,
            duration: 0.7,
          }}
        >
          <Image
            className={clsx('w-7 md:w-10')}
            alt="Love-you Gesture"
            src="/assets/emojis/love-you-gesture.png"
            width={48}
            height={48}
            onLoadingComplete={() => {
              controls.start({
                opacity: 1,
                y: 0,
                rotate: 0,
              });
            }}
            priority
          />
        </m.div>
      </m.div>
      <span className={clsx('text-slate-700', 'dark:text-slate-300')}>
        <m.span
          className={clsx(
            'mb-4 block text-[2.5rem] font-[1000] leading-none',
            'md:mb-6 md:text-7xl'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          We are{' '}
          <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>
            NodeX
          </strong>{' '}
          Capital,{' '}
        </m.span>
        <m.h1
          className={clsx(
            'block text-base text-slate-600',
            'md:text-xl',
            'dark:text-slate-400'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <span className={clsx('capitalize')}>We offer a <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>staking service</strong> that helps investors grow their cryptocurrency investments.</span>
          <span className={clsx('capitalize')}>Our technology allows for secure and reliable staking, with <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>high uptime and advanced monitoring</strong>. We are always here to help and provide support.</span>{' '}
          <span className={clsx('block mt-5 italic')}>&quot;Non-Custodial Staking Provider. Get more from stacking&quot;</span>
        </m.h1>
      </span>
    </div>
  );
}

export default HeaderTitle;
