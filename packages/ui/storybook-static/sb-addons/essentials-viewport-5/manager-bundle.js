try {
  (() => {
    var ie = Object.create;
    var H = Object.defineProperty;
    var ce = Object.getOwnPropertyDescriptor;
    var ae = Object.getOwnPropertyNames;
    var le = Object.getPrototypeOf,
      se = Object.prototype.hasOwnProperty;
    var O = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, { get: (t, r) => (typeof require < 'u' ? require : t)[r] })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var P = (e, t) => () => (e && (t = e((e = 0))), t);
    var Ie = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var ue = (e, t, r, l) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of ae(t))
          !se.call(e, a) &&
            a !== r &&
            H(e, a, { get: () => t[a], enumerable: !(l = ce(t, a)) || l.enumerable });
      return e;
    };
    var pe = (e, t, r) => (
      (r = e != null ? ie(le(e)) : {}),
      ue(t || !e || !e.__esModule ? H(r, 'default', { value: e, enumerable: !0 }) : r, e)
    );
    var d = P(() => {});
    var h = P(() => {});
    var m = P(() => {});
    var $ = Ie((Z, D) => {
      d();
      h();
      m();
      (function (e) {
        if (typeof Z == 'object' && typeof D < 'u') D.exports = e();
        else if (typeof define == 'function' && define.amd) define([], e);
        else {
          var t;
          typeof window < 'u' || typeof window < 'u'
            ? (t = window)
            : typeof self < 'u'
              ? (t = self)
              : (t = this),
            (t.memoizerific = e());
        }
      })(function () {
        var e, t, r;
        return (function l(a, S, u) {
          function i(c, I) {
            if (!S[c]) {
              if (!a[c]) {
                var s = typeof O == 'function' && O;
                if (!I && s) return s(c, !0);
                if (o) return o(c, !0);
                var g = new Error("Cannot find module '" + c + "'");
                throw ((g.code = 'MODULE_NOT_FOUND'), g);
              }
              var n = (S[c] = { exports: {} });
              a[c][0].call(
                n.exports,
                function (p) {
                  var b = a[c][1][p];
                  return i(b || p);
                },
                n,
                n.exports,
                l,
                a,
                S,
                u,
              );
            }
            return S[c].exports;
          }
          for (var o = typeof O == 'function' && O, f = 0; f < u.length; f++) i(u[f]);
          return i;
        })(
          {
            1: [
              function (l, a, S) {
                a.exports = function (u) {
                  if (typeof Map != 'function' || u) {
                    var i = l('./similar');
                    return new i();
                  } else return new Map();
                };
              },
              { './similar': 2 },
            ],
            2: [
              function (l, a, S) {
                function u() {
                  return (this.list = []), (this.lastItem = void 0), (this.size = 0), this;
                }
                (u.prototype.get = function (i) {
                  var o;
                  if (this.lastItem && this.isEqual(this.lastItem.key, i)) return this.lastItem.val;
                  if (((o = this.indexOf(i)), o >= 0))
                    return (this.lastItem = this.list[o]), this.list[o].val;
                }),
                  (u.prototype.set = function (i, o) {
                    var f;
                    return this.lastItem && this.isEqual(this.lastItem.key, i)
                      ? ((this.lastItem.val = o), this)
                      : ((f = this.indexOf(i)),
                        f >= 0
                          ? ((this.lastItem = this.list[f]), (this.list[f].val = o), this)
                          : ((this.lastItem = { key: i, val: o }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this));
                  }),
                  (u.prototype.delete = function (i) {
                    var o;
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, i) &&
                        (this.lastItem = void 0),
                      (o = this.indexOf(i)),
                      o >= 0)
                    )
                      return this.size--, this.list.splice(o, 1)[0];
                  }),
                  (u.prototype.has = function (i) {
                    var o;
                    return this.lastItem && this.isEqual(this.lastItem.key, i)
                      ? !0
                      : ((o = this.indexOf(i)), o >= 0 ? ((this.lastItem = this.list[o]), !0) : !1);
                  }),
                  (u.prototype.forEach = function (i, o) {
                    var f;
                    for (f = 0; f < this.size; f++)
                      i.call(o || this, this.list[f].val, this.list[f].key, this);
                  }),
                  (u.prototype.indexOf = function (i) {
                    var o;
                    for (o = 0; o < this.size; o++) if (this.isEqual(this.list[o].key, i)) return o;
                    return -1;
                  }),
                  (u.prototype.isEqual = function (i, o) {
                    return i === o || (i !== i && o !== o);
                  }),
                  (a.exports = u);
              },
              {},
            ],
            3: [
              function (l, a, S) {
                var u = l('map-or-similar');
                a.exports = function (c) {
                  var I = new u(!1),
                    s = [];
                  return function (g) {
                    var n = function () {
                      var p = I,
                        b,
                        R,
                        y = arguments.length - 1,
                        E = Array(y + 1),
                        x = !0,
                        C;
                      if ((n.numArgs || n.numArgs === 0) && n.numArgs !== y + 1)
                        throw new Error(
                          'Memoizerific functions should always be called with the same number of arguments',
                        );
                      for (C = 0; C < y; C++) {
                        if (((E[C] = { cacheItem: p, arg: arguments[C] }), p.has(arguments[C]))) {
                          p = p.get(arguments[C]);
                          continue;
                        }
                        (x = !1), (b = new u(!1)), p.set(arguments[C], b), (p = b);
                      }
                      return (
                        x && (p.has(arguments[y]) ? (R = p.get(arguments[y])) : (x = !1)),
                        x || ((R = g.apply(null, arguments)), p.set(arguments[y], R)),
                        c > 0 &&
                          ((E[y] = { cacheItem: p, arg: arguments[y] }),
                          x ? i(s, E) : s.push(E),
                          s.length > c && o(s.shift())),
                        (n.wasMemoized = x),
                        (n.numArgs = y + 1),
                        R
                      );
                    };
                    return (n.limit = c), (n.wasMemoized = !1), (n.cache = I), (n.lru = s), n;
                  };
                };
                function i(c, I) {
                  var s = c.length,
                    g = I.length,
                    n,
                    p,
                    b;
                  for (p = 0; p < s; p++) {
                    for (n = !0, b = 0; b < g; b++)
                      if (!f(c[p][b].arg, I[b].arg)) {
                        n = !1;
                        break;
                      }
                    if (n) break;
                  }
                  c.push(c.splice(p, 1)[0]);
                }
                function o(c) {
                  var I = c.length,
                    s = c[I - 1],
                    g,
                    n;
                  for (
                    s.cacheItem.delete(s.arg), n = I - 2;
                    n >= 0 && ((s = c[n]), (g = s.cacheItem.get(s.arg)), !g || !g.size);
                    n--
                  )
                    s.cacheItem.delete(s.arg);
                }
                function f(c, I) {
                  return c === I || (c !== c && I !== I);
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
    d();
    h();
    m();
    d();
    h();
    m();
    d();
    h();
    m();
    d();
    h();
    m();
    var w = __REACT__,
      {
        Children: De,
        Component: Ve,
        Fragment: U,
        Profiler: Ne,
        PureComponent: He,
        StrictMode: Ue,
        Suspense: ze,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Fe,
        cloneElement: Ge,
        createContext: qe,
        createElement: z,
        createFactory: We,
        createRef: Ye,
        forwardRef: je,
        isValidElement: Ke,
        lazy: Ze,
        memo: F,
        startTransition: $e,
        unstable_act: Je,
        useCallback: Qe,
        useContext: Xe,
        useDebugValue: et,
        useDeferredValue: tt,
        useEffect: L,
        useId: ot,
        useImperativeHandle: nt,
        useInsertionEffect: rt,
        useLayoutEffect: it,
        useMemo: ct,
        useReducer: at,
        useRef: G,
        useState: q,
        useSyncExternalStore: lt,
        useTransition: st,
        version: It,
      } = __REACT__;
    d();
    h();
    m();
    var ht = __STORYBOOK_API__,
      {
        ActiveTabs: mt,
        Consumer: ft,
        ManagerContext: gt,
        Provider: St,
        RequestResponseError: wt,
        addons: M,
        combineParameters: bt,
        controlOrMetaKey: yt,
        controlOrMetaSymbol: Ct,
        eventMatchesShortcut: vt,
        eventToShortcut: _t,
        experimental_requestResponse: Tt,
        isMacLike: xt,
        isShortcutTaken: Ot,
        keyToSymbol: At,
        merge: kt,
        mockChannel: Rt,
        optionOrAltSymbol: Et,
        shortcutMatchesShortcut: Lt,
        shortcutToHumanString: Bt,
        types: W,
        useAddonState: Pt,
        useArgTypes: Mt,
        useArgs: Dt,
        useChannel: Vt,
        useGlobalTypes: Nt,
        useGlobals: Y,
        useParameter: j,
        useSharedState: Ht,
        useStoryPrepared: Ut,
        useStorybookApi: K,
        useStorybookState: zt,
      } = __STORYBOOK_API__;
    var N = pe($());
    d();
    h();
    m();
    var $t = __STORYBOOK_THEMING__,
      {
        CacheProvider: Jt,
        ClassNames: Qt,
        Global: J,
        ThemeProvider: Xt,
        background: eo,
        color: to,
        convert: oo,
        create: no,
        createCache: ro,
        createGlobal: io,
        createReset: co,
        css: ao,
        darken: lo,
        ensure: so,
        ignoreSsrWarning: Io,
        isPropValid: uo,
        jsx: po,
        keyframes: ho,
        lighten: mo,
        styled: A,
        themes: fo,
        typography: go,
        useTheme: So,
        withTheme: Q,
      } = __STORYBOOK_THEMING__;
    d();
    h();
    m();
    var vo = __STORYBOOK_COMPONENTS__,
      {
        A: _o,
        ActionBar: To,
        AddonPanel: xo,
        Badge: Oo,
        Bar: Ao,
        Blockquote: ko,
        Button: Ro,
        ClipboardCode: Eo,
        Code: Lo,
        DL: Bo,
        Div: Po,
        DocumentWrapper: Mo,
        EmptyTabContent: Do,
        ErrorFormatter: Vo,
        FlexBar: No,
        Form: Ho,
        H1: Uo,
        H2: zo,
        H3: Fo,
        H4: Go,
        H5: qo,
        H6: Wo,
        HR: Yo,
        IconButton: V,
        IconButtonSkeleton: jo,
        Icons: Ko,
        Img: Zo,
        LI: $o,
        Link: Jo,
        ListItem: Qo,
        Loader: Xo,
        Modal: en,
        OL: tn,
        P: on,
        Placeholder: nn,
        Pre: rn,
        ResetWrapper: cn,
        ScrollArea: an,
        Separator: ln,
        Spaced: sn,
        Span: In,
        StorybookIcon: un,
        StorybookLogo: pn,
        Symbols: dn,
        SyntaxHighlighter: hn,
        TT: mn,
        TabBar: fn,
        TabButton: gn,
        TabWrapper: Sn,
        Table: wn,
        Tabs: bn,
        TabsState: yn,
        TooltipLinkList: X,
        TooltipMessage: Cn,
        TooltipNote: vn,
        UL: _n,
        WithTooltip: ee,
        WithTooltipPure: Tn,
        Zoom: xn,
        codeCommon: On,
        components: An,
        createCopyToClipboardFunction: kn,
        getStoryHref: Rn,
        icons: En,
        interleaveSeparators: Ln,
        nameSpaceClassNames: Bn,
        resetComponents: Pn,
        withReset: Mn,
      } = __STORYBOOK_COMPONENTS__;
    d();
    h();
    m();
    var Un = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: zn,
        AccessibilityIcon: Fn,
        AddIcon: Gn,
        AdminIcon: qn,
        AlertAltIcon: Wn,
        AlertIcon: Yn,
        AlignLeftIcon: jn,
        AlignRightIcon: Kn,
        AppleIcon: Zn,
        ArrowDownIcon: $n,
        ArrowLeftIcon: Jn,
        ArrowRightIcon: Qn,
        ArrowSolidDownIcon: Xn,
        ArrowSolidLeftIcon: er,
        ArrowSolidRightIcon: tr,
        ArrowSolidUpIcon: or,
        ArrowUpIcon: nr,
        AzureDevOpsIcon: rr,
        BackIcon: ir,
        BasketIcon: cr,
        BatchAcceptIcon: ar,
        BatchDenyIcon: lr,
        BeakerIcon: sr,
        BellIcon: Ir,
        BitbucketIcon: ur,
        BoldIcon: pr,
        BookIcon: dr,
        BookmarkHollowIcon: hr,
        BookmarkIcon: mr,
        BottomBarIcon: fr,
        BottomBarToggleIcon: gr,
        BoxIcon: Sr,
        BranchIcon: wr,
        BrowserIcon: br,
        ButtonIcon: yr,
        CPUIcon: Cr,
        CalendarIcon: vr,
        CameraIcon: _r,
        CategoryIcon: Tr,
        CertificateIcon: xr,
        ChangedIcon: Or,
        ChatIcon: Ar,
        CheckIcon: kr,
        ChevronDownIcon: Rr,
        ChevronLeftIcon: Er,
        ChevronRightIcon: Lr,
        ChevronSmallDownIcon: Br,
        ChevronSmallLeftIcon: Pr,
        ChevronSmallRightIcon: Mr,
        ChevronSmallUpIcon: Dr,
        ChevronUpIcon: Vr,
        ChromaticIcon: Nr,
        ChromeIcon: Hr,
        CircleHollowIcon: Ur,
        CircleIcon: zr,
        ClearIcon: Fr,
        CloseAltIcon: Gr,
        CloseIcon: qr,
        CloudHollowIcon: Wr,
        CloudIcon: Yr,
        CogIcon: jr,
        CollapseIcon: Kr,
        CommandIcon: Zr,
        CommentAddIcon: $r,
        CommentIcon: Jr,
        CommentsIcon: Qr,
        CommitIcon: Xr,
        CompassIcon: ei,
        ComponentDrivenIcon: ti,
        ComponentIcon: oi,
        ContrastIcon: ni,
        ControlsIcon: ri,
        CopyIcon: ii,
        CreditIcon: ci,
        CrossIcon: ai,
        DashboardIcon: li,
        DatabaseIcon: si,
        DeleteIcon: Ii,
        DiamondIcon: ui,
        DirectionIcon: pi,
        DiscordIcon: di,
        DocChartIcon: hi,
        DocListIcon: mi,
        DocumentIcon: fi,
        DownloadIcon: gi,
        DragIcon: Si,
        EditIcon: wi,
        EllipsisIcon: bi,
        EmailIcon: yi,
        ExpandAltIcon: Ci,
        ExpandIcon: vi,
        EyeCloseIcon: _i,
        EyeIcon: Ti,
        FaceHappyIcon: xi,
        FaceNeutralIcon: Oi,
        FaceSadIcon: Ai,
        FacebookIcon: ki,
        FailedIcon: Ri,
        FastForwardIcon: Ei,
        FigmaIcon: Li,
        FilterIcon: Bi,
        FlagIcon: Pi,
        FolderIcon: Mi,
        FormIcon: Di,
        GDriveIcon: Vi,
        GithubIcon: Ni,
        GitlabIcon: Hi,
        GlobeIcon: Ui,
        GoogleIcon: zi,
        GraphBarIcon: Fi,
        GraphLineIcon: Gi,
        GraphqlIcon: qi,
        GridAltIcon: Wi,
        GridIcon: Yi,
        GrowIcon: te,
        HeartHollowIcon: ji,
        HeartIcon: Ki,
        HomeIcon: Zi,
        HourglassIcon: $i,
        InfoIcon: Ji,
        ItalicIcon: Qi,
        JumpToIcon: Xi,
        KeyIcon: ec,
        LightningIcon: tc,
        LightningOffIcon: oc,
        LinkBrokenIcon: nc,
        LinkIcon: rc,
        LinkedinIcon: ic,
        LinuxIcon: cc,
        ListOrderedIcon: ac,
        ListUnorderedIcon: lc,
        LocationIcon: sc,
        LockIcon: Ic,
        MarkdownIcon: uc,
        MarkupIcon: pc,
        MediumIcon: dc,
        MemoryIcon: hc,
        MenuIcon: mc,
        MergeIcon: fc,
        MirrorIcon: gc,
        MobileIcon: Sc,
        MoonIcon: wc,
        NutIcon: bc,
        OutboxIcon: yc,
        OutlineIcon: Cc,
        PaintBrushIcon: vc,
        PaperClipIcon: _c,
        ParagraphIcon: Tc,
        PassedIcon: xc,
        PhoneIcon: Oc,
        PhotoDragIcon: Ac,
        PhotoIcon: kc,
        PinAltIcon: Rc,
        PinIcon: Ec,
        PlayBackIcon: Lc,
        PlayIcon: Bc,
        PlayNextIcon: Pc,
        PlusIcon: Mc,
        PointerDefaultIcon: Dc,
        PointerHandIcon: Vc,
        PowerIcon: Nc,
        PrintIcon: Hc,
        ProceedIcon: Uc,
        ProfileIcon: zc,
        PullRequestIcon: Fc,
        QuestionIcon: Gc,
        RSSIcon: qc,
        RedirectIcon: Wc,
        ReduxIcon: Yc,
        RefreshIcon: jc,
        ReplyIcon: Kc,
        RepoIcon: Zc,
        RequestChangeIcon: $c,
        RewindIcon: Jc,
        RulerIcon: Qc,
        SearchIcon: Xc,
        ShareAltIcon: ea,
        ShareIcon: ta,
        ShieldIcon: oa,
        SideBySideIcon: na,
        SidebarAltIcon: ra,
        SidebarAltToggleIcon: ia,
        SidebarIcon: ca,
        SidebarToggleIcon: aa,
        SpeakerIcon: la,
        StackedIcon: sa,
        StarHollowIcon: Ia,
        StarIcon: ua,
        StickerIcon: pa,
        StopAltIcon: da,
        StopIcon: ha,
        StorybookIcon: ma,
        StructureIcon: fa,
        SubtractIcon: ga,
        SunIcon: Sa,
        SupportIcon: wa,
        SwitchAltIcon: ba,
        SyncIcon: ya,
        TabletIcon: Ca,
        ThumbsUpIcon: va,
        TimeIcon: _a,
        TimerIcon: Ta,
        TransferIcon: oe,
        TrashIcon: xa,
        TwitterIcon: Oa,
        TypeIcon: Aa,
        UbuntuIcon: ka,
        UndoIcon: Ra,
        UnfoldIcon: Ea,
        UnlockIcon: La,
        UnpinIcon: Ba,
        UploadIcon: Pa,
        UserAddIcon: Ma,
        UserAltIcon: Da,
        UserIcon: Va,
        UsersIcon: Na,
        VSCodeIcon: Ha,
        VerifiedIcon: Ua,
        VideoIcon: za,
        WandIcon: Fa,
        WatchIcon: Ga,
        WindowsIcon: qa,
        WrenchIcon: Wa,
        YoutubeIcon: Ya,
        ZoomIcon: ja,
        ZoomOutIcon: Ka,
        ZoomResetIcon: Za,
        iconList: $a,
      } = __STORYBOOK_ICONS__;
    var k = 'storybook/viewport',
      he = 'viewport',
      me = { viewport: 'reset', viewportRotated: !1 },
      re = (e, t) => e.indexOf(t),
      fe = (e, t) => {
        let r = re(e, t);
        return r === e.length - 1 ? e[0] : e[r + 1];
      },
      ge = (e, t) => {
        let r = re(e, t);
        return r < 1 ? e[e.length - 1] : e[r - 1];
      },
      Se = async (e, t, r, l) => {
        await e.setAddonShortcut(k, {
          label: 'Previous viewport',
          defaultShortcut: ['alt', 'shift', 'V'],
          actionName: 'previous',
          action: () => {
            r({ viewport: ge(l, t.viewport) });
          },
        }),
          await e.setAddonShortcut(k, {
            label: 'Next viewport',
            defaultShortcut: ['alt', 'V'],
            actionName: 'next',
            action: () => {
              r({ viewport: fe(l, t.viewport) });
            },
          }),
          await e.setAddonShortcut(k, {
            label: 'Reset viewport',
            defaultShortcut: ['alt', 'control', 'V'],
            actionName: 'reset',
            action: () => {
              r(me);
            },
          });
      },
      we = {
        mobile1: {
          name: 'Small mobile',
          styles: { height: '568px', width: '320px' },
          type: 'mobile',
        },
        mobile2: {
          name: 'Large mobile',
          styles: { height: '896px', width: '414px' },
          type: 'mobile',
        },
        tablet: { name: 'Tablet', styles: { height: '1112px', width: '834px' }, type: 'tablet' },
      },
      be = (0, N.default)(50)((e) => [
        ...ye,
        ...Object.entries(e).map(([t, { name: r, ...l }]) => ({ ...l, id: t, title: r })),
      ]),
      B = { id: 'reset', title: 'Reset viewport', styles: null, type: 'other' },
      ye = [B],
      Ce = (0, N.default)(50)((e, t, r, l) =>
        e
          .filter((a) => a.id !== B.id || t.id !== a.id)
          .map((a) => ({
            ...a,
            onClick: () => {
              r({ viewport: a.id }), l();
            },
          })),
      ),
      ve = ({ width: e, height: t, ...r }) => ({ ...r, height: e, width: t }),
      _e = A.div(() => ({ display: 'inline-flex', alignItems: 'center' })),
      ne = A.div(({ theme: e }) => ({
        display: 'inline-block',
        textDecoration: 'none',
        padding: 10,
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '1',
        height: 40,
        border: 'none',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        background: 'transparent',
      })),
      Te = A(V)(() => ({ display: 'inline-flex', alignItems: 'center' })),
      xe = A.div(({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, marginLeft: 10 })),
      Oe = (e, t, r) => {
        if (t === null) return;
        let l = typeof t == 'function' ? t(e) : t;
        return r ? ve(l) : l;
      },
      Ae = F(
        Q(({ theme: e }) => {
          let [t, r] = Y(),
            {
              viewports: l = we,
              defaultOrientation: a,
              defaultViewport: S,
              disable: u,
            } = j(he, {}),
            i = be(l),
            o = K(),
            [f, c] = q(!1);
          S &&
            !i.find((n) => n.id === S) &&
            console.warn(
              `Cannot find "defaultViewport" of "${S}" in addon-viewport configs, please check the "viewports" setting in the configuration.`,
            ),
            L(() => {
              Se(o, t, r, Object.keys(l));
            }, [l, t, t.viewport, r, o]),
            L(() => {
              let n = a === 'landscape';
              ((S && t.viewport !== S) || (a && t.viewportRotated !== n)) &&
                r({ viewport: S, viewportRotated: n });
            }, [a, S, r]);
          let I =
              i.find((n) => n.id === t.viewport) ||
              i.find((n) => n.id === S) ||
              i.find((n) => n.default) ||
              B,
            s = G(),
            g = Oe(s.current, I.styles, t.viewportRotated);
          return (
            L(() => {
              s.current = g;
            }, [I]),
            u || Object.entries(l).length === 0
              ? null
              : w.createElement(
                  U,
                  null,
                  w.createElement(
                    ee,
                    {
                      placement: 'top',
                      tooltip: ({ onHide: n }) => w.createElement(X, { links: Ce(i, I, r, n) }),
                      closeOnOutsideClick: !0,
                      onVisibleChange: c,
                    },
                    w.createElement(
                      Te,
                      {
                        key: 'viewport',
                        title: 'Change the size of the preview',
                        active: f || !!g,
                        onDoubleClick: () => {
                          r({ viewport: B.id });
                        },
                      },
                      w.createElement(te, null),
                      g
                        ? w.createElement(
                            xe,
                            null,
                            t.viewportRotated ? `${I.title} (L)` : `${I.title} (P)`,
                          )
                        : null,
                    ),
                  ),
                  g
                    ? w.createElement(
                        _e,
                        null,
                        w.createElement(J, {
                          styles: {
                            'iframe[data-is-storybook="true"]': {
                              ...(g || { width: '100%', height: '100%' }),
                            },
                          },
                        }),
                        w.createElement(ne, { title: 'Viewport width' }, g.width.replace('px', '')),
                        w.createElement(
                          V,
                          {
                            key: 'viewport-rotate',
                            title: 'Rotate viewport',
                            onClick: () => {
                              r({ viewportRotated: !t.viewportRotated });
                            },
                          },
                          w.createElement(oe, null),
                        ),
                        w.createElement(
                          ne,
                          { title: 'Viewport height' },
                          g.height.replace('px', ''),
                        ),
                      )
                    : null,
                )
          );
        }),
      );
    M.register(k, () => {
      M.add(k, {
        title: 'viewport / media-queries',
        type: W.TOOL,
        match: ({ viewMode: e, tabId: t }) => e === 'story' && !t,
        render: () => z(Ae, null),
      });
    });
  })();
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
