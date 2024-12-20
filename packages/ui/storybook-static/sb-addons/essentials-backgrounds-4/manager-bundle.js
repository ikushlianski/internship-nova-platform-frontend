try {
  (() => {
    var ne = Object.create;
    var F = Object.defineProperty;
    var te = Object.getOwnPropertyDescriptor;
    var re = Object.getOwnPropertyNames;
    var ce = Object.getPrototypeOf,
      ie = Object.prototype.hasOwnProperty;
    var E = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, { get: (o, a) => (typeof require < 'u' ? require : o)[a] })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var x = (e, o) => () => (e && (o = e((e = 0))), o);
    var ae = (e, o) => () => (o || e((o = { exports: {} }).exports, o), o.exports);
    var se = (e, o, a, r) => {
      if ((o && typeof o == 'object') || typeof o == 'function')
        for (let c of re(o))
          !ie.call(e, c) &&
            c !== a &&
            F(e, c, { get: () => o[c], enumerable: !(r = te(o, c)) || r.enumerable });
      return e;
    };
    var le = (e, o, a) => (
      (a = e != null ? ne(ce(e)) : {}),
      se(o || !e || !e.__esModule ? F(a, 'default', { value: e, enumerable: !0 }) : a, e)
    );
    var I = x(() => {});
    var d = x(() => {});
    var m = x(() => {});
    var V = ae((W, G) => {
      I();
      d();
      m();
      (function (e) {
        if (typeof W == 'object' && typeof G < 'u') G.exports = e();
        else if (typeof define == 'function' && define.amd) define([], e);
        else {
          var o;
          typeof window < 'u' || typeof window < 'u'
            ? (o = window)
            : typeof self < 'u'
              ? (o = self)
              : (o = this),
            (o.memoizerific = e());
        }
      })(function () {
        var e, o, a;
        return (function r(c, h, s) {
          function t(i, f) {
            if (!h[i]) {
              if (!c[i]) {
                var u = typeof E == 'function' && E;
                if (!f && u) return u(i, !0);
                if (n) return n(i, !0);
                var b = new Error("Cannot find module '" + i + "'");
                throw ((b.code = 'MODULE_NOT_FOUND'), b);
              }
              var p = (h[i] = { exports: {} });
              c[i][0].call(
                p.exports,
                function (g) {
                  var S = c[i][1][g];
                  return t(S || g);
                },
                p,
                p.exports,
                r,
                c,
                h,
                s,
              );
            }
            return h[i].exports;
          }
          for (var n = typeof E == 'function' && E, l = 0; l < s.length; l++) t(s[l]);
          return t;
        })(
          {
            1: [
              function (r, c, h) {
                c.exports = function (s) {
                  if (typeof Map != 'function' || s) {
                    var t = r('./similar');
                    return new t();
                  } else return new Map();
                };
              },
              { './similar': 2 },
            ],
            2: [
              function (r, c, h) {
                function s() {
                  return (this.list = []), (this.lastItem = void 0), (this.size = 0), this;
                }
                (s.prototype.get = function (t) {
                  var n;
                  if (this.lastItem && this.isEqual(this.lastItem.key, t)) return this.lastItem.val;
                  if (((n = this.indexOf(t)), n >= 0))
                    return (this.lastItem = this.list[n]), this.list[n].val;
                }),
                  (s.prototype.set = function (t, n) {
                    var l;
                    return this.lastItem && this.isEqual(this.lastItem.key, t)
                      ? ((this.lastItem.val = n), this)
                      : ((l = this.indexOf(t)),
                        l >= 0
                          ? ((this.lastItem = this.list[l]), (this.list[l].val = n), this)
                          : ((this.lastItem = { key: t, val: n }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this));
                  }),
                  (s.prototype.delete = function (t) {
                    var n;
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, t) &&
                        (this.lastItem = void 0),
                      (n = this.indexOf(t)),
                      n >= 0)
                    )
                      return this.size--, this.list.splice(n, 1)[0];
                  }),
                  (s.prototype.has = function (t) {
                    var n;
                    return this.lastItem && this.isEqual(this.lastItem.key, t)
                      ? !0
                      : ((n = this.indexOf(t)), n >= 0 ? ((this.lastItem = this.list[n]), !0) : !1);
                  }),
                  (s.prototype.forEach = function (t, n) {
                    var l;
                    for (l = 0; l < this.size; l++)
                      t.call(n || this, this.list[l].val, this.list[l].key, this);
                  }),
                  (s.prototype.indexOf = function (t) {
                    var n;
                    for (n = 0; n < this.size; n++) if (this.isEqual(this.list[n].key, t)) return n;
                    return -1;
                  }),
                  (s.prototype.isEqual = function (t, n) {
                    return t === n || (t !== t && n !== n);
                  }),
                  (c.exports = s);
              },
              {},
            ],
            3: [
              function (r, c, h) {
                var s = r('map-or-similar');
                c.exports = function (i) {
                  var f = new s(!1),
                    u = [];
                  return function (b) {
                    var p = function () {
                      var g = f,
                        S,
                        w,
                        T = arguments.length - 1,
                        B = Array(T + 1),
                        A = !0,
                        O;
                      if ((p.numArgs || p.numArgs === 0) && p.numArgs !== T + 1)
                        throw new Error(
                          'Memoizerific functions should always be called with the same number of arguments',
                        );
                      for (O = 0; O < T; O++) {
                        if (((B[O] = { cacheItem: g, arg: arguments[O] }), g.has(arguments[O]))) {
                          g = g.get(arguments[O]);
                          continue;
                        }
                        (A = !1), (S = new s(!1)), g.set(arguments[O], S), (g = S);
                      }
                      return (
                        A && (g.has(arguments[T]) ? (w = g.get(arguments[T])) : (A = !1)),
                        A || ((w = b.apply(null, arguments)), g.set(arguments[T], w)),
                        i > 0 &&
                          ((B[T] = { cacheItem: g, arg: arguments[T] }),
                          A ? t(u, B) : u.push(B),
                          u.length > i && n(u.shift())),
                        (p.wasMemoized = A),
                        (p.numArgs = T + 1),
                        w
                      );
                    };
                    return (p.limit = i), (p.wasMemoized = !1), (p.cache = f), (p.lru = u), p;
                  };
                };
                function t(i, f) {
                  var u = i.length,
                    b = f.length,
                    p,
                    g,
                    S;
                  for (g = 0; g < u; g++) {
                    for (p = !0, S = 0; S < b; S++)
                      if (!l(i[g][S].arg, f[S].arg)) {
                        p = !1;
                        break;
                      }
                    if (p) break;
                  }
                  i.push(i.splice(g, 1)[0]);
                }
                function n(i) {
                  var f = i.length,
                    u = i[f - 1],
                    b,
                    p;
                  for (
                    u.cacheItem.delete(u.arg), p = f - 2;
                    p >= 0 && ((u = i[p]), (b = u.cacheItem.get(u.arg)), !b || !b.size);
                    p--
                  )
                    u.cacheItem.delete(u.arg);
                }
                function l(i, f) {
                  return i === f || (i !== i && f !== f);
                }
              },
              { 'map-or-similar': 1 },
            ],
          },
          {},
          [3],
        )(3);
      });
    });
    I();
    d();
    m();
    I();
    d();
    m();
    I();
    d();
    m();
    I();
    d();
    m();
    var C = __REACT__,
      {
        Children: ke,
        Component: Te,
        Fragment: R,
        Profiler: Oe,
        PureComponent: ve,
        StrictMode: Ae,
        Suspense: Ee,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: we,
        cloneElement: Be,
        createContext: xe,
        createElement: Re,
        createFactory: Le,
        createRef: Pe,
        forwardRef: Me,
        isValidElement: De,
        lazy: Ge,
        memo: L,
        startTransition: He,
        unstable_act: Ne,
        useCallback: q,
        useContext: Ue,
        useDebugValue: Fe,
        useDeferredValue: qe,
        useEffect: ze,
        useId: Ke,
        useImperativeHandle: Ye,
        useInsertionEffect: We,
        useLayoutEffect: Ve,
        useMemo: z,
        useReducer: $e,
        useRef: je,
        useState: K,
        useSyncExternalStore: Ze,
        useTransition: Je,
        version: Qe,
      } = __REACT__;
    I();
    d();
    m();
    var to = __STORYBOOK_API__,
      {
        ActiveTabs: ro,
        Consumer: co,
        ManagerContext: io,
        Provider: ao,
        RequestResponseError: so,
        addons: P,
        combineParameters: lo,
        controlOrMetaKey: uo,
        controlOrMetaSymbol: Io,
        eventMatchesShortcut: mo,
        eventToShortcut: po,
        experimental_requestResponse: fo,
        isMacLike: ho,
        isShortcutTaken: go,
        keyToSymbol: bo,
        merge: So,
        mockChannel: Co,
        optionOrAltSymbol: yo,
        shortcutMatchesShortcut: _o,
        shortcutToHumanString: ko,
        types: Y,
        useAddonState: To,
        useArgTypes: Oo,
        useArgs: vo,
        useChannel: Ao,
        useGlobalTypes: Eo,
        useGlobals: M,
        useParameter: D,
        useSharedState: wo,
        useStoryPrepared: Bo,
        useStorybookApi: xo,
        useStorybookState: Ro,
      } = __STORYBOOK_API__;
    var U = le(V());
    I();
    d();
    m();
    var Fo = __STORYBOOK_CLIENT_LOGGER__,
      { deprecate: qo, logger: H, once: zo, pretty: Ko } = __STORYBOOK_CLIENT_LOGGER__;
    I();
    d();
    m();
    var jo = __STORYBOOK_COMPONENTS__,
      {
        A: Zo,
        ActionBar: Jo,
        AddonPanel: Qo,
        Badge: Xo,
        Bar: en,
        Blockquote: on,
        Button: nn,
        ClipboardCode: tn,
        Code: rn,
        DL: cn,
        Div: an,
        DocumentWrapper: sn,
        EmptyTabContent: ln,
        ErrorFormatter: un,
        FlexBar: In,
        Form: dn,
        H1: mn,
        H2: pn,
        H3: fn,
        H4: hn,
        H5: gn,
        H6: bn,
        HR: Sn,
        IconButton: N,
        IconButtonSkeleton: Cn,
        Icons: yn,
        Img: _n,
        LI: kn,
        Link: Tn,
        ListItem: On,
        Loader: vn,
        Modal: An,
        OL: En,
        P: wn,
        Placeholder: Bn,
        Pre: xn,
        ResetWrapper: Rn,
        ScrollArea: Ln,
        Separator: Pn,
        Spaced: Mn,
        Span: Dn,
        StorybookIcon: Gn,
        StorybookLogo: Hn,
        Symbols: Nn,
        SyntaxHighlighter: Un,
        TT: Fn,
        TabBar: qn,
        TabButton: zn,
        TabWrapper: Kn,
        Table: Yn,
        Tabs: Wn,
        TabsState: Vn,
        TooltipLinkList: $,
        TooltipMessage: $n,
        TooltipNote: jn,
        UL: Zn,
        WithTooltip: j,
        WithTooltipPure: Jn,
        Zoom: Qn,
        codeCommon: Xn,
        components: et,
        createCopyToClipboardFunction: ot,
        getStoryHref: nt,
        icons: tt,
        interleaveSeparators: rt,
        nameSpaceClassNames: ct,
        resetComponents: it,
        withReset: at,
      } = __STORYBOOK_COMPONENTS__;
    I();
    d();
    m();
    var dt = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: mt,
        AccessibilityIcon: pt,
        AddIcon: ft,
        AdminIcon: ht,
        AlertAltIcon: gt,
        AlertIcon: bt,
        AlignLeftIcon: St,
        AlignRightIcon: Ct,
        AppleIcon: yt,
        ArrowDownIcon: _t,
        ArrowLeftIcon: kt,
        ArrowRightIcon: Tt,
        ArrowSolidDownIcon: Ot,
        ArrowSolidLeftIcon: vt,
        ArrowSolidRightIcon: At,
        ArrowSolidUpIcon: Et,
        ArrowUpIcon: wt,
        AzureDevOpsIcon: Bt,
        BackIcon: xt,
        BasketIcon: Rt,
        BatchAcceptIcon: Lt,
        BatchDenyIcon: Pt,
        BeakerIcon: Mt,
        BellIcon: Dt,
        BitbucketIcon: Gt,
        BoldIcon: Ht,
        BookIcon: Nt,
        BookmarkHollowIcon: Ut,
        BookmarkIcon: Ft,
        BottomBarIcon: qt,
        BottomBarToggleIcon: zt,
        BoxIcon: Kt,
        BranchIcon: Yt,
        BrowserIcon: Wt,
        ButtonIcon: Vt,
        CPUIcon: $t,
        CalendarIcon: jt,
        CameraIcon: Zt,
        CategoryIcon: Jt,
        CertificateIcon: Qt,
        ChangedIcon: Xt,
        ChatIcon: er,
        CheckIcon: or,
        ChevronDownIcon: nr,
        ChevronLeftIcon: tr,
        ChevronRightIcon: rr,
        ChevronSmallDownIcon: cr,
        ChevronSmallLeftIcon: ir,
        ChevronSmallRightIcon: ar,
        ChevronSmallUpIcon: sr,
        ChevronUpIcon: lr,
        ChromaticIcon: ur,
        ChromeIcon: Ir,
        CircleHollowIcon: dr,
        CircleIcon: mr,
        ClearIcon: pr,
        CloseAltIcon: fr,
        CloseIcon: hr,
        CloudHollowIcon: gr,
        CloudIcon: br,
        CogIcon: Sr,
        CollapseIcon: Cr,
        CommandIcon: yr,
        CommentAddIcon: _r,
        CommentIcon: kr,
        CommentsIcon: Tr,
        CommitIcon: Or,
        CompassIcon: vr,
        ComponentDrivenIcon: Ar,
        ComponentIcon: Er,
        ContrastIcon: wr,
        ControlsIcon: Br,
        CopyIcon: xr,
        CreditIcon: Rr,
        CrossIcon: Lr,
        DashboardIcon: Pr,
        DatabaseIcon: Mr,
        DeleteIcon: Dr,
        DiamondIcon: Gr,
        DirectionIcon: Hr,
        DiscordIcon: Nr,
        DocChartIcon: Ur,
        DocListIcon: Fr,
        DocumentIcon: qr,
        DownloadIcon: zr,
        DragIcon: Kr,
        EditIcon: Yr,
        EllipsisIcon: Wr,
        EmailIcon: Vr,
        ExpandAltIcon: $r,
        ExpandIcon: jr,
        EyeCloseIcon: Zr,
        EyeIcon: Jr,
        FaceHappyIcon: Qr,
        FaceNeutralIcon: Xr,
        FaceSadIcon: ec,
        FacebookIcon: oc,
        FailedIcon: nc,
        FastForwardIcon: tc,
        FigmaIcon: rc,
        FilterIcon: cc,
        FlagIcon: ic,
        FolderIcon: ac,
        FormIcon: sc,
        GDriveIcon: lc,
        GithubIcon: uc,
        GitlabIcon: Ic,
        GlobeIcon: dc,
        GoogleIcon: mc,
        GraphBarIcon: pc,
        GraphLineIcon: fc,
        GraphqlIcon: hc,
        GridAltIcon: gc,
        GridIcon: Z,
        GrowIcon: bc,
        HeartHollowIcon: Sc,
        HeartIcon: Cc,
        HomeIcon: yc,
        HourglassIcon: _c,
        InfoIcon: kc,
        ItalicIcon: Tc,
        JumpToIcon: Oc,
        KeyIcon: vc,
        LightningIcon: Ac,
        LightningOffIcon: Ec,
        LinkBrokenIcon: wc,
        LinkIcon: Bc,
        LinkedinIcon: xc,
        LinuxIcon: Rc,
        ListOrderedIcon: Lc,
        ListUnorderedIcon: Pc,
        LocationIcon: Mc,
        LockIcon: Dc,
        MarkdownIcon: Gc,
        MarkupIcon: Hc,
        MediumIcon: Nc,
        MemoryIcon: Uc,
        MenuIcon: Fc,
        MergeIcon: qc,
        MirrorIcon: zc,
        MobileIcon: Kc,
        MoonIcon: Yc,
        NutIcon: Wc,
        OutboxIcon: Vc,
        OutlineIcon: $c,
        PaintBrushIcon: jc,
        PaperClipIcon: Zc,
        ParagraphIcon: Jc,
        PassedIcon: Qc,
        PhoneIcon: Xc,
        PhotoDragIcon: ei,
        PhotoIcon: J,
        PinAltIcon: oi,
        PinIcon: ni,
        PlayBackIcon: ti,
        PlayIcon: ri,
        PlayNextIcon: ci,
        PlusIcon: ii,
        PointerDefaultIcon: ai,
        PointerHandIcon: si,
        PowerIcon: li,
        PrintIcon: ui,
        ProceedIcon: Ii,
        ProfileIcon: di,
        PullRequestIcon: mi,
        QuestionIcon: pi,
        RSSIcon: fi,
        RedirectIcon: hi,
        ReduxIcon: gi,
        RefreshIcon: bi,
        ReplyIcon: Si,
        RepoIcon: Ci,
        RequestChangeIcon: yi,
        RewindIcon: _i,
        RulerIcon: ki,
        SearchIcon: Ti,
        ShareAltIcon: Oi,
        ShareIcon: vi,
        ShieldIcon: Ai,
        SideBySideIcon: Ei,
        SidebarAltIcon: wi,
        SidebarAltToggleIcon: Bi,
        SidebarIcon: xi,
        SidebarToggleIcon: Ri,
        SpeakerIcon: Li,
        StackedIcon: Pi,
        StarHollowIcon: Mi,
        StarIcon: Di,
        StickerIcon: Gi,
        StopAltIcon: Hi,
        StopIcon: Ni,
        StorybookIcon: Ui,
        StructureIcon: Fi,
        SubtractIcon: qi,
        SunIcon: zi,
        SupportIcon: Ki,
        SwitchAltIcon: Yi,
        SyncIcon: Wi,
        TabletIcon: Vi,
        ThumbsUpIcon: $i,
        TimeIcon: ji,
        TimerIcon: Zi,
        TransferIcon: Ji,
        TrashIcon: Qi,
        TwitterIcon: Xi,
        TypeIcon: ea,
        UbuntuIcon: oa,
        UndoIcon: na,
        UnfoldIcon: ta,
        UnlockIcon: ra,
        UnpinIcon: ca,
        UploadIcon: ia,
        UserAddIcon: aa,
        UserAltIcon: sa,
        UserIcon: la,
        UsersIcon: ua,
        VSCodeIcon: Ia,
        VerifiedIcon: da,
        VideoIcon: ma,
        WandIcon: pa,
        WatchIcon: fa,
        WindowsIcon: ha,
        WrenchIcon: ga,
        YoutubeIcon: ba,
        ZoomIcon: Sa,
        ZoomOutIcon: Ca,
        ZoomResetIcon: ya,
        iconList: _a,
      } = __STORYBOOK_ICONS__;
    I();
    d();
    m();
    var Aa = __STORYBOOK_THEMING__,
      {
        CacheProvider: Ea,
        ClassNames: wa,
        Global: Ba,
        ThemeProvider: xa,
        background: Ra,
        color: La,
        convert: Pa,
        create: Ma,
        createCache: Da,
        createGlobal: Ga,
        createReset: Ha,
        css: Na,
        darken: Ua,
        ensure: Fa,
        ignoreSsrWarning: qa,
        isPropValid: za,
        jsx: Ka,
        keyframes: Ya,
        lighten: Wa,
        styled: Q,
        themes: Va,
        typography: $a,
        useTheme: ja,
        withTheme: Za,
      } = __STORYBOOK_THEMING__;
    I();
    d();
    m();
    var os = (() => {
      let e;
      return (
        typeof window < 'u'
          ? (e = window)
          : typeof globalThis < 'u'
            ? (e = globalThis)
            : typeof window < 'u'
              ? (e = window)
              : typeof self < 'u'
                ? (e = self)
                : (e = {}),
        e
      );
    })();
    I();
    d();
    m();
    function X(e) {
      for (var o = [], a = 1; a < arguments.length; a++) o[a - 1] = arguments[a];
      var r = Array.from(typeof e == 'string' ? [e] : e);
      r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, '');
      var c = r.reduce(function (t, n) {
        var l = n.match(/\n([\t ]+|(?!\s).)/g);
        return l
          ? t.concat(
              l.map(function (i) {
                var f, u;
                return (u =
                  (f = i.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null &&
                  u !== void 0
                  ? u
                  : 0;
              }),
            )
          : t;
      }, []);
      if (c.length) {
        var h = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, c) +
            '}',
          'g',
        );
        r = r.map(function (t) {
          return t.replace(
            h,
            `
`,
          );
        });
      }
      r[0] = r[0].replace(/^\r?\n/, '');
      var s = r[0];
      return (
        o.forEach(function (t, n) {
          var l = s.match(/(?:^|\n)( *)$/),
            i = l ? l[1] : '',
            f = t;
          typeof t == 'string' &&
            t.includes(`
`) &&
            (f = String(t)
              .split(
                `
`,
              )
              .map(function (u, b) {
                return b === 0 ? u : '' + i + u;
              }).join(`
`)),
            (s += f + r[n + 1]);
        }),
        s
      );
    }
    var ee = 'storybook/background',
      v = 'backgrounds',
      ue = Q.span(
        ({ background: e }) => ({
          borderRadius: '1rem',
          display: 'block',
          height: '1rem',
          width: '1rem',
          background: e,
        }),
        ({ theme: e }) => ({ boxShadow: `${e.appBorderColor} 0 0 0 1px inset` }),
      ),
      Ie = (e, o = [], a) => {
        if (e === 'transparent') return 'transparent';
        if (o.find((c) => c.value === e)) return e;
        let r = o.find((c) => c.name === a);
        if (r) return r.value;
        if (a) {
          let c = o.map((h) => h.name).join(', ');
          H.warn(X`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${c}.
      `);
        }
        return 'transparent';
      },
      oe = (0, U.default)(1e3)((e, o, a, r, c, h) => ({
        id: e || o,
        title: o,
        onClick: () => {
          c({ selected: a, name: o });
        },
        value: a,
        right: r ? C.createElement(ue, { background: a }) : void 0,
        active: h,
      })),
      de = (0, U.default)(10)((e, o, a) => {
        let r = e.map(({ name: c, value: h }) => oe(null, c, h, !0, a, h === o));
        return o !== 'transparent'
          ? [oe('reset', 'Clear background', 'transparent', null, a, !1), ...r]
          : r;
      }),
      me = { default: null, disable: !0, values: [] },
      pe = L(function () {
        let e = D(v, me),
          [o, a] = K(!1),
          [r, c] = M(),
          h = r[v]?.value,
          s = z(() => Ie(h, e.values, e.default), [e, h]);
        Array.isArray(e) &&
          H.warn(
            'Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md',
          );
        let t = q(
          (n) => {
            c({ [v]: { ...r[v], value: n } });
          },
          [e, r, c],
        );
        return e.disable
          ? null
          : C.createElement(
              R,
              null,
              C.createElement(
                j,
                {
                  placement: 'top',
                  closeOnOutsideClick: !0,
                  tooltip: ({ onHide: n }) =>
                    C.createElement($, {
                      links: de(e.values, s, ({ selected: l }) => {
                        s !== l && t(l), n();
                      }),
                    }),
                  onVisibleChange: a,
                },
                C.createElement(
                  N,
                  {
                    key: 'background',
                    title: 'Change the background of the preview',
                    active: s !== 'transparent' || o,
                  },
                  C.createElement(J, null),
                ),
              ),
            );
      }),
      fe = L(function () {
        let [e, o] = M(),
          { grid: a } = D(v, { grid: { disable: !1 } });
        if (a?.disable) return null;
        let r = e[v]?.grid || !1;
        return C.createElement(
          N,
          {
            key: 'background',
            active: r,
            title: 'Apply a grid to the preview',
            onClick: () => o({ [v]: { ...e[v], grid: !r } }),
          },
          C.createElement(Z, null),
        );
      });
    P.register(ee, () => {
      P.add(ee, {
        title: 'Backgrounds',
        type: Y.TOOL,
        match: ({ viewMode: e, tabId: o }) => !!(e && e.match(/^(story|docs)$/)) && !o,
        render: () =>
          C.createElement(R, null, C.createElement(pe, null), C.createElement(fe, null)),
      });
    });
  })();
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
