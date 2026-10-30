export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=it.team619.beatzz&hl=en_IN';

export const GooglePlayIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M48 59.49v393a14.07 14.07 0 0021.59 11.88l315.49-196.5a14.07 14.07 0 000-23.76L69.59 47.61A14.07 14.07 0 0048 59.49z" fill="#00E676" />
    <path d="M359.35 190.28L69.59 47.61A14.07 14.07 0 0048 59.49v393a14.05 14.05 0 005.28 11l232.91-232.91 73.16-40.3z" fill="#00B0FF" />
    <path d="M456.41 244.12l-97.06-53.84-73.16 65.72 73.16 65.72 97.06-53.84a14.07 14.07 0 000-23.76z" fill="#FFC400" />
    <path d="M53.28 463.49a14.07 14.07 0 0016.31-.12l289.76-142.65-73.16-64.72L53.28 463.49z" fill="#FF3D00" />
  </svg>
);

export const PlayStoreButton = ({ className = '', size = 'md' }) => {
  const sizeClasses =
    size === 'lg'
      ? 'px-7 py-4 rounded-2xl gap-3.5'
      : size === 'sm'
      ? 'px-4 py-2.5 rounded-xl gap-2.5'
      : 'px-6 py-3.5 rounded-xl md:rounded-2xl gap-3';

  const iconSizes = size === 'lg' ? 'w-7 h-7' : size === 'sm' ? 'w-5 h-5' : 'w-6 h-6';

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Beatzz on Google Play Store"
      className={`group relative inline-flex items-center justify-center bg-zinc-950/90 hover:bg-zinc-900 border border-white/15 hover:border-[#165f68]/60 text-white transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_0_25px_rgba(22,95,104,0.2)] hover:shadow-[0_0_35px_rgba(22,95,104,0.45)] overflow-hidden ${sizeClasses} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#165f68]/0 via-[#165f68]/15 to-[#165f68]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      <GooglePlayIcon className={`${iconSizes} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`} />
      <div className="flex flex-col items-start leading-none text-left">
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">
          GET IT ON
        </span>
        <span className="text-sm md:text-base font-black tracking-tight text-white mt-0.5">
          Google Play
        </span>
      </div>
    </a>
  );
};

export const PlayStoreWidget = ({ className = '' }) => {
  return (
    <div
      className={`glass-card-premium p-6 md:p-8 border border-[#165f68]/30 bg-gradient-to-br from-zinc-950/90 via-black/90 to-[#165f68]/10 rounded-3xl shadow-[0_0_60px_rgba(22,95,104,0.2)] relative overflow-hidden ${className}`}
    >
      <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#00E676]/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#165f68]/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* App Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
          <div className="relative flex-shrink-0">
            <img
              src="/logo.png"
              alt="Beatzz App Icon"
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.6)] bg-zinc-900 p-1.5"
            />
            <span className="absolute -bottom-2 -right-2 bg-zinc-900 border border-white/15 rounded-full p-1.5 shadow-md">
              <GooglePlayIcon className="w-4 h-4" />
            </span>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              Verified by Play Protect
            </div>

            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">
              Beatzz — Music Streaming
            </h3>

            <p className="text-xs md:text-sm text-gray-400 font-light max-w-md">
              Official Google Play Store release (<code className="text-[#165f68] font-semibold">it.team619.beatzz</code>). Automatic updates, 100% ad-free playback, and verified security.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs text-gray-300">
              <div className="flex items-center gap-1 font-bold">
                <span className="text-amber-400">★</span>
                <span>5.0</span>
                <span className="text-gray-500 font-normal">Rating</span>
              </div>
              <span className="text-white/15">•</span>
              <div className="font-bold">
                <span>Free</span>
                <span className="text-gray-500 font-normal ml-1">No Ads</span>
              </div>
              <span className="text-white/15">•</span>
              <div className="font-bold text-[#165f68]">Android</div>
            </div>
          </div>
        </div>

        {/* Play Store Action */}
        <div className="flex flex-col items-center sm:items-end gap-2.5 w-full md:w-auto flex-shrink-0">
          <PlayStoreButton size="lg" className="w-full sm:w-auto" />
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            Official Play Store Listing
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayStoreButton;
