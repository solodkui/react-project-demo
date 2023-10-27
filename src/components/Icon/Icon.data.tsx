const ICONS = {
  graduationCap: (
    <path d='M31.155 10.045l-14.135-5.060c-0.686-0.245-1.435-0.245-2.122 0l-14.096 5.060c-0.481 0.175-0.802 0.635-0.802 1.155s0.322 0.982 0.802 1.155l3.001 1.075c-0.595 0.79-1.013 1.708-1.228 2.698-0.574 0.242-0.976 0.813-0.976 1.473 0 0.498 0.241 0.924 0.597 1.218l-1.242 7.45c-0.082 0.487 0.294 0.932 0.789 0.932h2.911c0.494 0 0.87-0.444 0.789-0.931l-1.242-7.45c0.356-0.294 0.597-0.764 0.597-1.218 0-0.515-0.259-0.951-0.636-1.244 0.213-0.888 0.644-1.691 1.247-2.351l9.53 3.412c0.687 0.245 1.435 0.245 2.122 0l14.135-5.060c0.483-0.175 0.802-0.636 0.802-1.155s-0.32-0.98-0.845-1.155zM17.555 18.92c-0.47 0.185-1.010 0.28-1.555 0.28-0.546 0-1.085-0.093-1.6-0.278l-7.26-2.597-0.74 7.14c0 2.065 4.255 3.735 9.6 3.735 5.255 0 9.6-1.67 9.6-3.733l-0.739-7.145-7.306 2.599z'></path>
  ),
  money: (
    <>
      <path
        fill='#3f8e3f'
        d='M29.217 13.217h-26.435c-0.384 0-0.696-0.311-0.696-0.696v0-7.652c0-0.384 0.311-0.696 0.696-0.696h26.435c0.384 0 0.696 0.311 0.696 0.696v7.652c0 0.384-0.311 0.696-0.696 0.696v0z'
      ></path>
      <path
        fill='#33cc33'
        d='M31.304 27.826h-30.609c-0.384 0-0.696-0.311-0.696-0.696v0-19.478c0-0.384 0.311-0.696 0.696-0.696h30.609c0.384 0 0.696 0.311 0.696 0.696v0 19.478c0 0.384-0.311 0.696-0.696 0.696v0z'
      ></path>
      <path
        fill='#9edb9e'
        d='M25.739 9.043h-19.478c0 2.305-1.869 4.174-4.174 4.174v0 8.348c2.305 0 4.174 1.869 4.174 4.174v0h19.478c0-2.305 1.869-4.174 4.174-4.174v0-8.348c-2.305 0-4.174-1.869-4.174-4.174v0z'
      ></path>
      <path
        fill='#33cc33'
        d='M11.13 17.391c0 2.689 2.18 4.87 4.87 4.87s4.87-2.18 4.87-4.87v0c0-2.689-2.18-4.87-4.87-4.87s-4.87 2.18-4.87 4.87v0z'
      ></path>
    </>
  ),
  angular: (
    <path d='M14.908 0.171c0.711-0.227 1.474-0.227 2.185 0l10.754 3.441c1.485 0.475 2.492 1.855 2.492 3.414v7.21c0 3.208-0.654 6.519-2.669 9.591-2.014 3.069-5.295 5.761-10.307 7.896-0.869 0.37-1.855 0.37-2.724 0-5.012-2.135-8.293-4.826-10.307-7.896-2.015-3.072-2.669-6.383-2.669-9.591v-7.21c0-1.559 1.007-2.939 2.492-3.414l10.754-3.441zM16.156 3.097c-0.102-0.033-0.211-0.033-0.312 0l-10.754 3.441c-0.212 0.068-0.356 0.265-0.356 0.488v7.21c0 2.782 0.563 5.462 2.166 7.905 1.605 2.446 4.345 4.796 8.942 6.754 0.099 0.042 0.217 0.042 0.316 0 4.597-1.958 7.337-4.308 8.942-6.754 1.603-2.444 2.166-5.123 2.166-7.905v-7.21c0-0.223-0.144-0.42-0.356-0.488l-10.754-3.441zM16 6.555c0.628 0 1.193 0.382 1.426 0.966l5.121 12.802c0.315 0.788-0.068 1.682-0.856 1.997s-1.682-0.068-1.997-0.856l-0.638-1.595h-6.113l-0.638 1.595c-0.315 0.788-1.209 1.171-1.997 0.856s-1.171-1.209-0.856-1.997l5.121-12.802c0.233-0.583 0.798-0.966 1.426-0.966zM14.172 16.796h3.655l-1.828-4.569-1.828 4.569z'></path>
  ),
  react: (
    <>
      <path d='M18.858 15.974c0-1.53-1.279-2.771-2.858-2.771s-2.857 1.241-2.857 2.771c0 1.53 1.279 2.771 2.857 2.771s2.858-1.24 2.858-2.771z'></path>
      <path d='M25.28 10.831c0.603-2.377 1.362-6.786-1.312-8.281-2.661-1.488-6.125 1.364-7.954 3.075-1.823-1.695-5.384-4.534-8.056-3.035-2.66 1.493-1.84 5.829-1.223 8.221-2.482 0.683-6.736 2.155-6.736 5.163 0 2.999 4.25 4.6 6.717 5.283-0.619 2.406-1.398 6.679 1.265 8.169 2.682 1.499 6.231-1.273 8.077-3.003 1.841 1.722 5.271 4.512 7.933 3.018 2.67-1.499 1.975-5.849 1.358-8.255 2.391-0.684 6.65-2.251 6.65-5.212 0-2.979-4.277-4.463-6.72-5.144zM24.977 19.911c-0.405-1.243-0.952-2.565-1.62-3.931 0.638-1.333 1.164-2.638 1.557-3.873 1.791 0.503 5.719 1.654 5.719 3.867 0 2.234-3.77 3.395-5.656 3.937zM23.307 28.294c-1.986 1.115-4.936-1.553-6.296-2.821 0.902-0.956 1.803-2.068 2.682-3.302 1.547-0.133 3.009-0.351 4.334-0.648 0.434 1.702 1.274 5.652-0.721 6.772zM8.665 28.279c-1.986-1.111-1.078-4.924-0.623-6.696 1.311 0.281 2.762 0.483 4.312 0.605 0.885 1.208 1.812 2.318 2.747 3.291-1.154 1.083-4.441 3.916-6.436 2.8zM1.367 15.974c0-2.242 3.905-3.384 5.736-3.886 0.401 1.263 0.926 2.583 1.56 3.918-0.642 1.355-1.175 2.696-1.579 3.974-1.746-0.485-5.717-1.763-5.717-4.006zM8.644 3.737c1.994-1.119 5.089 1.607 6.413 2.834-0.93 0.968-1.848 2.070-2.726 3.271-1.505 0.135-2.946 0.352-4.27 0.643-0.497-1.93-1.409-5.63 0.583-6.748zM20.671 11.282c1.021 0.125 1.999 0.291 2.918 0.494-0.276 0.857-0.619 1.753-1.024 2.672-0.587-1.079-1.217-2.137-1.894-3.166zM16.015 7.518c0.631 0.662 1.262 1.402 1.883 2.204-1.26-0.058-2.522-0.058-3.782-0.001 0.622-0.795 1.259-1.533 1.899-2.203zM9.447 14.447c-0.398-0.915-0.739-1.815-1.017-2.685 0.913-0.198 1.887-0.36 2.901-0.483-0.679 1.027-1.308 2.084-1.884 3.168zM11.36 20.763c-1.048-0.113-2.036-0.267-2.949-0.46 0.283-0.884 0.631-1.804 1.037-2.739 0.585 1.095 1.223 2.163 1.912 3.199zM16.053 24.524c-0.648-0.678-1.294-1.428-1.925-2.234 1.267 0.048 2.537 0.048 3.804-0.006-0.623 0.821-1.252 1.572-1.879 2.241zM22.578 17.517c0.428 0.945 0.788 1.86 1.075 2.729-0.928 0.205-1.93 0.371-2.985 0.493 0.682-1.048 1.322-2.123 1.91-3.223zM18.93 20.9c-1.938 0.134-3.889 0.133-5.828 0.011-1.102-1.56-2.083-3.201-2.929-4.905 0.843-1.7 1.816-3.338 2.913-4.896 1.94-0.142 3.893-0.143 5.833 0.001 1.087 1.558 2.059 3.191 2.921 4.876-0.852 1.699-1.831 3.34-2.91 4.913zM23.286 3.698c1.995 1.116 1.107 5.078 0.671 6.801-1.328-0.297-2.769-0.518-4.279-0.655-0.879-1.214-1.79-2.318-2.705-3.273 1.341-1.253 4.337-3.977 6.312-2.872z'></path>
    </>
  ),
  css: (
    <>
      <path d='M10.271 5.729c-0.791 0-1.432 0.641-1.432 1.432s0.641 1.432 1.432 1.432h6.065l-5.343 3.053c-0.564 0.322-0.84 0.983-0.674 1.611s0.735 1.065 1.384 1.065h6.875c0.158 0 0.286 0.128 0.286 0.286v3.298c0 0.076-0.030 0.149-0.084 0.203l-2.578 2.578c-0.112 0.112-0.293 0.112-0.405 0l-3.081-3.081c-0.559-0.559-1.466-0.559-2.026 0s-0.559 1.466 0 2.025l4.297 4.297c0.559 0.559 1.466 0.559 2.025 0l4.297-4.297c0.269-0.269 0.419-0.633 0.419-1.013v-5.729c0-0.791-0.641-1.432-1.432-1.432h-3.2l5.343-3.053c0.564-0.322 0.84-0.983 0.674-1.611s-0.735-1.065-1.384-1.065h-11.458z'></path>
      <path d='M4.98 0c-2.615 0-4.623 2.316-4.254 4.904l2.247 15.731c0.145 1.017 0.651 1.949 1.424 2.626l8.773 7.676c1.62 1.417 4.039 1.417 5.659 0l8.773-7.676c0.773-0.677 1.279-1.609 1.424-2.626l2.247-15.731c0.37-2.588-1.639-4.904-4.253-4.904h-22.039zM3.562 4.499c-0.123-0.863 0.546-1.635 1.418-1.635h22.039c0.872 0 1.541 0.772 1.418 1.635l-2.247 15.731c-0.048 0.339-0.217 0.65-0.475 0.875l-8.773 7.676c-0.54 0.473-1.346 0.473-1.886 0l-8.773-7.676c-0.258-0.226-0.426-0.536-0.475-0.875l-2.247-15.73z'></path>
    </>
  ),
  html: (
    <>
      <path d='M10.271 5.729c-0.441 0-0.857 0.203-1.129 0.551s-0.368 0.801-0.261 1.229l1.432 5.729c0.159 0.638 0.732 1.085 1.389 1.085h6.875c0.158 0 0.286 0.128 0.286 0.286v3.298c0 0.076-0.030 0.149-0.084 0.203l-2.578 2.578c-0.112 0.112-0.293 0.112-0.405 0l-3.081-3.081c-0.559-0.559-1.466-0.559-2.026 0s-0.559 1.466 0 2.025l4.297 4.297c0.559 0.559 1.466 0.559 2.025 0l4.297-4.297c0.269-0.269 0.419-0.633 0.419-1.013v-5.729c0-0.791-0.641-1.432-1.432-1.432h-7.252c-0.131 0-0.246-0.089-0.278-0.217l-0.573-2.292c-0.045-0.181 0.092-0.356 0.278-0.356h9.257c0.791 0 1.432-0.641 1.432-1.432s-0.641-1.432-1.432-1.432h-11.458z'></path>
      <path d='M4.98 0c-2.615 0-4.623 2.316-4.254 4.904l2.247 15.731c0.145 1.017 0.651 1.949 1.424 2.626l8.773 7.676c1.62 1.417 4.039 1.417 5.659 0l8.773-7.676c0.773-0.677 1.279-1.609 1.424-2.626l2.247-15.731c0.37-2.588-1.639-4.904-4.253-4.904h-22.039zM3.562 4.499c-0.123-0.863 0.546-1.635 1.418-1.635h22.039c0.872 0 1.541 0.772 1.418 1.635l-2.247 15.731c-0.048 0.339-0.217 0.65-0.475 0.875l-8.773 7.676c-0.54 0.473-1.346 0.473-1.886 0l-8.773-7.676c-0.258-0.226-0.426-0.536-0.475-0.875l-2.247-15.73z'></path>
    </>
  ),
  javascript: (
    <>
      <path d='M17.432 7.161c0-0.791 0.641-1.432 1.432-1.432h4.297c0.791 0 1.432 0.641 1.432 1.432s-0.641 1.432-1.432 1.432h-2.578c-0.158 0-0.286 0.128-0.286 0.286v2.292c0 0.158 0.128 0.286 0.286 0.286h2.578c0.791 0 1.432 0.641 1.432 1.432v4.297c0 0.38-0.151 0.744-0.419 1.013l-4.297 4.297c-0.559 0.559-1.466 0.559-2.025 0s-0.559-1.466 0-2.025l3.793-3.793c0.054-0.054 0.084-0.127 0.084-0.203v-1.866c0-0.158-0.128-0.286-0.286-0.286h-2.578c-0.791 0-1.432-0.641-1.432-1.432v-5.729z'></path>
      <path d='M14.568 7.161c0-0.791-0.641-1.432-1.432-1.432s-1.432 0.641-1.432 1.432v10.173c0 0.255-0.309 0.383-0.489 0.203l-0.859-0.859c-0.054-0.054-0.084-0.127-0.084-0.203v-0.72c0-0.791-0.641-1.432-1.432-1.432s-1.432 0.641-1.432 1.432v1.432c0 0.38 0.151 0.744 0.42 1.013l4.297 4.297c0.41 0.41 1.026 0.532 1.561 0.311s0.884-0.744 0.884-1.323v-14.323z'></path>
      <path d='M0.727 4.904c-0.37-2.588 1.639-4.904 4.254-4.904h22.039c2.615 0 4.623 2.316 4.253 4.904l-2.247 15.731c-0.145 1.017-0.651 1.949-1.424 2.626l-8.773 7.676c-1.62 1.417-4.039 1.417-5.659 0l-8.773-7.676c-0.774-0.677-1.279-1.609-1.424-2.626l-2.247-15.731zM4.98 2.865c-0.872 0-1.541 0.772-1.418 1.635l2.247 15.73c0.048 0.339 0.217 0.65 0.475 0.875l8.773 7.676c0.54 0.473 1.346 0.473 1.886 0l8.773-7.676c0.258-0.226 0.426-0.536 0.475-0.875l2.247-15.73c0.123-0.863-0.546-1.635-1.418-1.635h-22.039z'></path>
    </>
  ),
  english: (
    <path d='M9.952 0.018c-0 0-0 0-0 0-1.185 0-2.145 0.949-2.145 2.12 0 0 0 0 0 0v0 2.678h-5.662c0 0 0 0-0 0-1.185 0-2.145 0.949-2.145 2.12 0 0 0 0 0 0v0c0 0 0 0 0 0 0 1.171 0.96 2.12 2.145 2.12 0 0 0 0 0 0h5.369c-0.306 3.822-1.459 6.802-4.925 9.206-0.555 0.389-0.913 1.021-0.913 1.736 0 0.456 0.146 0.879 0.394 1.224l-0.005-0.007c0.393 0.549 1.033 0.902 1.756 0.902 0.461 0 0.889-0.144 1.239-0.389l-0.007 0.004c2.525-1.752 4.201-3.937 5.26-6.32 1.030 1.655 2.422 3.171 4.272 4.454 0.343 0.241 0.771 0.385 1.232 0.385 0.723 0 1.363-0.354 1.751-0.896l0.005-0.007c0.243-0.339 0.389-0.762 0.389-1.218 0-0.715-0.358-1.347-0.906-1.731l-0.007-0.004c-2.881-1.998-4.164-4.394-4.691-7.34h5.398c1.184-0 2.145-0.949 2.145-2.12 0 0 0 0 0-0v0c0 0 0 0 0-0 0-1.171-0.96-2.12-2.145-2.12h-5.659v-2.678c0 0 0 0 0-0 0-1.171-0.96-2.12-2.145-2.12 0 0 0 0-0 0v0zM22.89 11.747c-0.887 0.015-1.641 0.559-1.955 1.326l-0.005 0.014-6.398 15.994c-0.095 0.231-0.15 0.499-0.15 0.78 0 0.89 0.555 1.652 1.342 1.967l0.014 0.005c0.234 0.094 0.505 0.149 0.789 0.149 0.901 0 1.671-0.549 1.989-1.326l0.005-0.014 1.17-2.924h7l1.17 2.924c0.323 0.792 1.094 1.341 1.994 1.341 0.284 0 0.555-0.055 0.803-0.154l-0.014 0.005c0.801-0.319 1.356-1.081 1.356-1.972 0-0.281-0.055-0.549-0.155-0.794l0.005 0.014-6.398-15.994c-0.319-0.781-1.073-1.326-1.958-1.34l-0.002-0c-0.107 0.001-0.212 0.010-0.313 0.026l0.012-0.002c-0.090-0.014-0.194-0.023-0.3-0.024h-0.001zM23.191 18.967l1.804 4.509h-3.607l1.804-4.509z'></path>
  ),
  telegram: (
    <path d='M16 0c-8.838 0-16 7.162-16 16s7.162 16 16 16 16-7.163 16-16-7.163-16-16-16zM23.863 10.969l-2.625 12.369c-0.181 0.881-0.712 1.087-1.45 0.681l-4-2.956-1.919 1.869c-0.225 0.219-0.4 0.4-0.8 0.4-0.519 0-0.431-0.194-0.606-0.688l-1.363-4.475-3.956-1.231c-0.856-0.262-0.862-0.85 0.194-1.269l15.412-5.95c0.7-0.319 1.381 0.169 1.113 1.25z'></path>
  ),
  instagram: (
    <>
      <path d='M16.009 2.884c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.462c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.462-0.094zM16.009 0.003c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.887-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.887-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z'></path>
      <path d='M16.009 7.784c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16.009 21.334c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z'></path>
      <path d='M26.472 7.459c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z'></path>
    </>
  ),
  youtube: (
    <path d='M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z'></path>
  ),
  whatsapp: (
    <path d='M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.59238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.4-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z'></path>
  ),
  check: (
    <path d='M12 28c-1 0-2-0.4-2.8-1.2l-8-8c-1.6-1.6-1.6-4 0-5.6s4.2-1.6 5.6 0l5.2 5.2 13.2-13.2c1.6-1.6 4-1.6 5.6 0s1.6 4 0 5.6l-16 16c-0.8 0.8-1.8 1.2-2.8 1.2z'></path>
  ),
} as const;

export type TIconType = keyof typeof ICONS;

export default ICONS;
