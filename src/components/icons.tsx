import {
  AvatarIcon,
  DashboardIcon,
  GitHubLogoIcon,
  ImageIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  instagram: InstagramLogoIcon,
  gitHub: GitHubLogoIcon,
  dashboard: DashboardIcon,
  avatar: AvatarIcon,
  placeholder: ImageIcon,
  logo: ({ ...props }: IconProps) => (
    <svg
      width="61"
      height="13"
      viewBox="0 0 61 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.504313 0.639999H3.75231L6.64831 8.912L9.52831 0.639999H12.7763V12H10.3443V4.64L7.67231 11.968H5.59231L2.93631 4.64V12H0.504313V0.639999ZM18.8424 12.192C17.9784 12.192 17.2211 12.0107 16.5704 11.648C15.9198 11.2747 15.4131 10.752 15.0504 10.08C14.6984 9.39733 14.5224 8.608 14.5224 7.712C14.5224 6.816 14.6984 6.032 15.0504 5.36C15.4024 4.67733 15.9038 4.15467 16.5544 3.792C17.2051 3.41867 17.9624 3.232 18.8264 3.232C19.6691 3.232 20.4051 3.41867 21.0344 3.792C21.6744 4.16533 22.1651 4.704 22.5064 5.408C22.8478 6.10133 23.0184 6.92267 23.0184 7.872V8.352H17.0024C17.0238 9.01333 17.1998 9.51467 17.5304 9.856C17.8611 10.1973 18.3144 10.368 18.8904 10.368C19.7224 10.368 20.2558 10.0213 20.4904 9.328L22.9064 9.472C22.6718 10.3253 22.1918 10.992 21.4664 11.472C20.7518 11.952 19.8771 12.192 18.8424 12.192ZM20.5704 6.88C20.5384 6.272 20.3678 5.808 20.0584 5.488C19.7491 5.168 19.3384 5.008 18.8264 5.008C18.3251 5.008 17.9091 5.17333 17.5784 5.504C17.2584 5.83467 17.0664 6.29333 17.0024 6.88H20.5704ZM27.6514 12.192C26.9368 12.192 26.3128 12.0107 25.7794 11.648C25.2568 11.2853 24.8514 10.768 24.5634 10.096C24.2861 9.41333 24.1474 8.61867 24.1474 7.712C24.1474 6.80533 24.2914 6.016 24.5794 5.344C24.8674 4.672 25.2728 4.15467 25.7954 3.792C26.3288 3.41867 26.9474 3.232 27.6514 3.232C28.2594 3.232 28.7874 3.35467 29.2354 3.6C29.6834 3.84533 30.0194 4.192 30.2434 4.64V0.639999H32.6434V12H30.3394L30.2914 10.736C30.0568 11.1947 29.7048 11.552 29.2354 11.808C28.7768 12.064 28.2488 12.192 27.6514 12.192ZM28.4514 10.352C29.0274 10.352 29.4701 10.128 29.7794 9.68C30.0888 9.232 30.2434 8.576 30.2434 7.712C30.2434 6.848 30.0888 6.192 29.7794 5.744C29.4701 5.296 29.0274 5.072 28.4514 5.072C27.8861 5.072 27.4381 5.312 27.1074 5.792C26.7768 6.26133 26.6114 6.90133 26.6114 7.712C26.6114 8.512 26.7768 9.152 27.1074 9.632C27.4488 10.112 27.8968 10.352 28.4514 10.352ZM34.3919 3.424H36.7919V12H34.3919V3.424ZM34.3439 0.447999H36.8239V2.368H34.3439V0.447999ZM41.4267 12.192C40.5414 12.192 39.848 11.9093 39.3467 11.344C38.856 10.7787 38.6107 9.97867 38.6107 8.944V3.424H41.0107V8.384C41.0107 9.04533 41.112 9.53067 41.3147 9.84C41.5174 10.1387 41.8374 10.288 42.2747 10.288C42.776 10.288 43.16 10.1227 43.4267 9.792C43.6934 9.45067 43.8267 8.944 43.8267 8.272V3.424H46.2267V12H44.0347L44.0027 10.624C43.5547 11.6693 42.696 12.192 41.4267 12.192ZM48.3294 3.424H50.4894L50.5374 4.816C50.7614 4.31467 51.0761 3.92533 51.4814 3.648C51.8974 3.37067 52.3614 3.232 52.8734 3.232C53.4814 3.232 53.9934 3.38667 54.4094 3.696C54.8254 3.99467 55.1294 4.42133 55.3214 4.976C55.5241 4.41067 55.8334 3.97867 56.2494 3.68C56.6654 3.38133 57.1614 3.232 57.7374 3.232C58.6334 3.232 59.3374 3.51467 59.8494 4.08C60.3614 4.63467 60.6174 5.43467 60.6174 6.48V12H58.2174V7.152C58.2174 6.46933 58.1108 5.96267 57.8974 5.632C57.6948 5.30133 57.3694 5.136 56.9214 5.136C56.4841 5.136 56.1428 5.31733 55.8974 5.68C55.6628 6.032 55.5454 6.53333 55.5454 7.184V12H53.3854V7.184C53.3854 6.50133 53.2841 5.98933 53.0814 5.648C52.8788 5.30667 52.5534 5.136 52.1054 5.136C51.6681 5.136 51.3268 5.31733 51.0814 5.68C50.8468 6.032 50.7294 6.53333 50.7294 7.184V12H48.3294V3.424Z"
        fill="currentColor"
      />
    </svg>
  ),
  google: ({ ...props }: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  discord: ({ ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
