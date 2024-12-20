try {
  (() => {
    var t = __REACT__,
      {
        Children: f,
        Component: R,
        Fragment: P,
        Profiler: L,
        PureComponent: E,
        StrictMode: D,
        Suspense: w,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: v,
        cloneElement: x,
        createContext: H,
        createElement: M,
        createFactory: U,
        createRef: F,
        forwardRef: N,
        isValidElement: G,
        lazy: W,
        memo: u,
        startTransition: K,
        unstable_act: Y,
        useCallback: d,
        useContext: q,
        useDebugValue: V,
        useDeferredValue: Z,
        useEffect: p,
        useId: z,
        useImperativeHandle: J,
        useInsertionEffect: Q,
        useLayoutEffect: $,
        useMemo: j,
        useReducer: X,
        useRef: oo,
        useState: no,
        useSyncExternalStore: eo,
        useTransition: co,
        version: to,
      } = __REACT__;
    var io = __STORYBOOK_API__,
      {
        ActiveTabs: so,
        Consumer: uo,
        ManagerContext: po,
        Provider: mo,
        RequestResponseError: So,
        addons: l,
        combineParameters: Co,
        controlOrMetaKey: ho,
        controlOrMetaSymbol: Ao,
        eventMatchesShortcut: _o,
        eventToShortcut: bo,
        experimental_requestResponse: To,
        isMacLike: go,
        isShortcutTaken: yo,
        keyToSymbol: Oo,
        merge: ko,
        mockChannel: Bo,
        optionOrAltSymbol: fo,
        shortcutMatchesShortcut: Ro,
        shortcutToHumanString: Po,
        types: m,
        useAddonState: Lo,
        useArgTypes: Eo,
        useArgs: Do,
        useChannel: wo,
        useGlobalTypes: vo,
        useGlobals: S,
        useParameter: xo,
        useSharedState: Ho,
        useStoryPrepared: Mo,
        useStorybookApi: C,
        useStorybookState: Uo,
      } = __STORYBOOK_API__;
    var Ko = __STORYBOOK_COMPONENTS__,
      {
        A: Yo,
        ActionBar: qo,
        AddonPanel: Vo,
        Badge: Zo,
        Bar: zo,
        Blockquote: Jo,
        Button: Qo,
        ClipboardCode: $o,
        Code: jo,
        DL: Xo,
        Div: on,
        DocumentWrapper: nn,
        EmptyTabContent: en,
        ErrorFormatter: cn,
        FlexBar: tn,
        Form: rn,
        H1: In,
        H2: an,
        H3: ln,
        H4: sn,
        H5: un,
        H6: dn,
        HR: pn,
        IconButton: h,
        IconButtonSkeleton: mn,
        Icons: Sn,
        Img: Cn,
        LI: hn,
        Link: An,
        ListItem: _n,
        Loader: bn,
        Modal: Tn,
        OL: gn,
        P: yn,
        Placeholder: On,
        Pre: kn,
        ResetWrapper: Bn,
        ScrollArea: fn,
        Separator: Rn,
        Spaced: Pn,
        Span: Ln,
        StorybookIcon: En,
        StorybookLogo: Dn,
        Symbols: wn,
        SyntaxHighlighter: vn,
        TT: xn,
        TabBar: Hn,
        TabButton: Mn,
        TabWrapper: Un,
        Table: Fn,
        Tabs: Nn,
        TabsState: Gn,
        TooltipLinkList: Wn,
        TooltipMessage: Kn,
        TooltipNote: Yn,
        UL: qn,
        WithTooltip: Vn,
        WithTooltipPure: Zn,
        Zoom: zn,
        codeCommon: Jn,
        components: Qn,
        createCopyToClipboardFunction: $n,
        getStoryHref: jn,
        icons: Xn,
        interleaveSeparators: oe,
        nameSpaceClassNames: ne,
        resetComponents: ee,
        withReset: ce,
      } = __STORYBOOK_COMPONENTS__;
    var le = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: ie,
        AccessibilityIcon: se,
        AddIcon: ue,
        AdminIcon: de,
        AlertAltIcon: pe,
        AlertIcon: me,
        AlignLeftIcon: Se,
        AlignRightIcon: Ce,
        AppleIcon: he,
        ArrowDownIcon: Ae,
        ArrowLeftIcon: _e,
        ArrowRightIcon: be,
        ArrowSolidDownIcon: Te,
        ArrowSolidLeftIcon: ge,
        ArrowSolidRightIcon: ye,
        ArrowSolidUpIcon: Oe,
        ArrowUpIcon: ke,
        AzureDevOpsIcon: Be,
        BackIcon: fe,
        BasketIcon: Re,
        BatchAcceptIcon: Pe,
        BatchDenyIcon: Le,
        BeakerIcon: Ee,
        BellIcon: De,
        BitbucketIcon: we,
        BoldIcon: ve,
        BookIcon: xe,
        BookmarkHollowIcon: He,
        BookmarkIcon: Me,
        BottomBarIcon: Ue,
        BottomBarToggleIcon: Fe,
        BoxIcon: Ne,
        BranchIcon: Ge,
        BrowserIcon: We,
        ButtonIcon: Ke,
        CPUIcon: Ye,
        CalendarIcon: qe,
        CameraIcon: Ve,
        CategoryIcon: Ze,
        CertificateIcon: ze,
        ChangedIcon: Je,
        ChatIcon: Qe,
        CheckIcon: $e,
        ChevronDownIcon: je,
        ChevronLeftIcon: Xe,
        ChevronRightIcon: oc,
        ChevronSmallDownIcon: nc,
        ChevronSmallLeftIcon: ec,
        ChevronSmallRightIcon: cc,
        ChevronSmallUpIcon: tc,
        ChevronUpIcon: rc,
        ChromaticIcon: Ic,
        ChromeIcon: ac,
        CircleHollowIcon: lc,
        CircleIcon: ic,
        ClearIcon: sc,
        CloseAltIcon: uc,
        CloseIcon: dc,
        CloudHollowIcon: pc,
        CloudIcon: mc,
        CogIcon: Sc,
        CollapseIcon: Cc,
        CommandIcon: hc,
        CommentAddIcon: Ac,
        CommentIcon: _c,
        CommentsIcon: bc,
        CommitIcon: Tc,
        CompassIcon: gc,
        ComponentDrivenIcon: yc,
        ComponentIcon: Oc,
        ContrastIcon: kc,
        ControlsIcon: Bc,
        CopyIcon: fc,
        CreditIcon: Rc,
        CrossIcon: Pc,
        DashboardIcon: Lc,
        DatabaseIcon: Ec,
        DeleteIcon: Dc,
        DiamondIcon: wc,
        DirectionIcon: vc,
        DiscordIcon: xc,
        DocChartIcon: Hc,
        DocListIcon: Mc,
        DocumentIcon: Uc,
        DownloadIcon: Fc,
        DragIcon: Nc,
        EditIcon: Gc,
        EllipsisIcon: Wc,
        EmailIcon: Kc,
        ExpandAltIcon: Yc,
        ExpandIcon: qc,
        EyeCloseIcon: Vc,
        EyeIcon: Zc,
        FaceHappyIcon: zc,
        FaceNeutralIcon: Jc,
        FaceSadIcon: Qc,
        FacebookIcon: $c,
        FailedIcon: jc,
        FastForwardIcon: Xc,
        FigmaIcon: ot,
        FilterIcon: nt,
        FlagIcon: et,
        FolderIcon: ct,
        FormIcon: tt,
        GDriveIcon: rt,
        GithubIcon: It,
        GitlabIcon: at,
        GlobeIcon: lt,
        GoogleIcon: it,
        GraphBarIcon: st,
        GraphLineIcon: ut,
        GraphqlIcon: dt,
        GridAltIcon: pt,
        GridIcon: mt,
        GrowIcon: St,
        HeartHollowIcon: Ct,
        HeartIcon: ht,
        HomeIcon: At,
        HourglassIcon: _t,
        InfoIcon: bt,
        ItalicIcon: Tt,
        JumpToIcon: gt,
        KeyIcon: yt,
        LightningIcon: Ot,
        LightningOffIcon: kt,
        LinkBrokenIcon: Bt,
        LinkIcon: ft,
        LinkedinIcon: Rt,
        LinuxIcon: Pt,
        ListOrderedIcon: Lt,
        ListUnorderedIcon: Et,
        LocationIcon: Dt,
        LockIcon: wt,
        MarkdownIcon: vt,
        MarkupIcon: xt,
        MediumIcon: Ht,
        MemoryIcon: Mt,
        MenuIcon: Ut,
        MergeIcon: Ft,
        MirrorIcon: Nt,
        MobileIcon: Gt,
        MoonIcon: Wt,
        NutIcon: Kt,
        OutboxIcon: Yt,
        OutlineIcon: A,
        PaintBrushIcon: qt,
        PaperClipIcon: Vt,
        ParagraphIcon: Zt,
        PassedIcon: zt,
        PhoneIcon: Jt,
        PhotoDragIcon: Qt,
        PhotoIcon: $t,
        PinAltIcon: jt,
        PinIcon: Xt,
        PlayBackIcon: or,
        PlayIcon: nr,
        PlayNextIcon: er,
        PlusIcon: cr,
        PointerDefaultIcon: tr,
        PointerHandIcon: rr,
        PowerIcon: Ir,
        PrintIcon: ar,
        ProceedIcon: lr,
        ProfileIcon: ir,
        PullRequestIcon: sr,
        QuestionIcon: ur,
        RSSIcon: dr,
        RedirectIcon: pr,
        ReduxIcon: mr,
        RefreshIcon: Sr,
        ReplyIcon: Cr,
        RepoIcon: hr,
        RequestChangeIcon: Ar,
        RewindIcon: _r,
        RulerIcon: br,
        SearchIcon: Tr,
        ShareAltIcon: gr,
        ShareIcon: yr,
        ShieldIcon: Or,
        SideBySideIcon: kr,
        SidebarAltIcon: Br,
        SidebarAltToggleIcon: fr,
        SidebarIcon: Rr,
        SidebarToggleIcon: Pr,
        SpeakerIcon: Lr,
        StackedIcon: Er,
        StarHollowIcon: Dr,
        StarIcon: wr,
        StickerIcon: vr,
        StopAltIcon: xr,
        StopIcon: Hr,
        StorybookIcon: Mr,
        StructureIcon: Ur,
        SubtractIcon: Fr,
        SunIcon: Nr,
        SupportIcon: Gr,
        SwitchAltIcon: Wr,
        SyncIcon: Kr,
        TabletIcon: Yr,
        ThumbsUpIcon: qr,
        TimeIcon: Vr,
        TimerIcon: Zr,
        TransferIcon: zr,
        TrashIcon: Jr,
        TwitterIcon: Qr,
        TypeIcon: $r,
        UbuntuIcon: jr,
        UndoIcon: Xr,
        UnfoldIcon: oI,
        UnlockIcon: nI,
        UnpinIcon: eI,
        UploadIcon: cI,
        UserAddIcon: tI,
        UserAltIcon: rI,
        UserIcon: II,
        UsersIcon: aI,
        VSCodeIcon: lI,
        VerifiedIcon: iI,
        VideoIcon: sI,
        WandIcon: uI,
        WatchIcon: dI,
        WindowsIcon: pI,
        WrenchIcon: mI,
        YoutubeIcon: SI,
        ZoomIcon: CI,
        ZoomOutIcon: hI,
        ZoomResetIcon: AI,
        iconList: _I,
      } = __STORYBOOK_ICONS__;
    var i = 'storybook/outline',
      _ = 'outline',
      b = u(function () {
        let [c, r] = S(),
          s = C(),
          I = [!0, 'true'].includes(c[_]),
          a = d(() => r({ [_]: !I }), [I]);
        return (
          p(() => {
            s.setAddonShortcut(i, {
              label: 'Toggle Outline',
              defaultShortcut: ['alt', 'O'],
              actionName: 'outline',
              showInMenu: !1,
              action: a,
            });
          }, [a, s]),
          t.createElement(
            h,
            { key: 'outline', active: I, title: 'Apply outlines to the preview', onClick: a },
            t.createElement(A, null),
          )
        );
      });
    l.register(i, () => {
      l.add(i, {
        title: 'Outline',
        type: m.TOOL,
        match: ({ viewMode: c, tabId: r }) => !!(c && c.match(/^(story|docs)$/)) && !r,
        render: () => t.createElement(b, null),
      });
    });
  })();
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
